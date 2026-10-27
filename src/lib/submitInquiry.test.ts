import { describe, it, expect, vi, beforeEach } from "vitest";
import { submitInquiry, InquiryPayload, CONTACT_ENDPOINT } from "./submitInquiry";

const payload: InquiryPayload = {
  name: "Test Person",
  email: "test@example.com",
  message: "Hello",
  source: "Invitation request",
};

const jsonResponse = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status });

describe("submitInquiry", () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal("fetch", fetchMock);
  });

  it("returns primary success without touching the fallback", async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse(200, { success: true }));

    const result = await submitInquiry(payload);

    expect(result).toEqual({ ok: true, via: "primary" });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe(CONTACT_ENDPOINT);
  });

  it("goes straight to the fallback when the endpoint is not configured", async () => {
    vi.resetModules();
    vi.stubEnv("VITE_CONTACT_ENDPOINT", "");
    const { submitInquiry: submitWithoutEndpoint } = await import(
      "./submitInquiry"
    );
    fetchMock.mockResolvedValueOnce(jsonResponse(200, { success: "true" }));

    const result = await submitWithoutEndpoint(payload);

    expect(result).toEqual({ ok: true, via: "fallback" });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(String(fetchMock.mock.calls[0][0])).toContain("formsubmit.co");
    vi.unstubAllEnvs();
  });

  it("falls back when the primary returns an error status", async () => {
    fetchMock
      .mockResolvedValueOnce(jsonResponse(500, { error: "boom" }))
      .mockResolvedValueOnce(jsonResponse(200, { success: "true" }));

    const result = await submitInquiry(payload);

    expect(result).toEqual({ ok: true, via: "fallback" });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("falls back when the primary is unreachable (network error)", async () => {
    fetchMock
      .mockRejectedValueOnce(new TypeError("Failed to fetch"))
      .mockResolvedValueOnce(jsonResponse(200, { success: "true" }));

    const result = await submitInquiry(payload);

    expect(result).toEqual({ ok: true, via: "fallback" });
  });

  it("sends the full lead and the backend error to the fallback relay", async () => {
    fetchMock
      .mockRejectedValueOnce(new TypeError("Failed to fetch"))
      .mockResolvedValueOnce(jsonResponse(200, { success: "true" }));

    await submitInquiry(payload);

    const [url, init] = fetchMock.mock.calls[1];
    expect(String(url)).toContain("formsubmit.co");
    const body = JSON.parse(init.body);
    expect(body.name).toBe(payload.name);
    expect(body.email).toBe(payload.email);
    expect(body.message).toBe(payload.message);
    expect(body.source).toBe(payload.source);
    expect(body.backend_error).toContain("Failed to fetch");
    expect(body._subject).toContain("ALERT");
  });

  it("returns ok: false only when both channels fail", async () => {
    fetchMock
      .mockRejectedValueOnce(new TypeError("Failed to fetch"))
      .mockRejectedValueOnce(new TypeError("Failed to fetch"));

    const result = await submitInquiry(payload);

    expect(result).toEqual({ ok: false, reason: "unavailable" });
  });

  it("treats an unactivated/failed fallback response as failure", async () => {
    fetchMock
      .mockResolvedValueOnce(jsonResponse(500, {}))
      .mockResolvedValueOnce(
        jsonResponse(200, { success: "false", message: "activate first" })
      );

    const result = await submitInquiry(payload);

    expect(result).toEqual({ ok: false, reason: "unavailable" });
  });

  it("does not fall back when the bot check fails (403 turnstile_failed)", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse(403, { success: false, code: "turnstile_failed", error: "Bot check failed" })
    );

    const result = await submitInquiry({ ...payload, turnstileToken: "tok" });

    expect(result).toEqual({ ok: false, reason: "turnstile" });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("sends the Turnstile token to the primary but never to the fallback relay", async () => {
    fetchMock
      .mockResolvedValueOnce(jsonResponse(500, {}))
      .mockResolvedValueOnce(jsonResponse(200, { success: "true" }));

    await submitInquiry({ ...payload, turnstileToken: "tok" });

    const primaryBody = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(primaryBody.turnstileToken).toBe("tok");
    const fallbackBody = JSON.parse(fetchMock.mock.calls[1][1].body);
    expect(fallbackBody).not.toHaveProperty("turnstileToken");
    expect(fallbackBody.name).toBe(payload.name);
  });
});
