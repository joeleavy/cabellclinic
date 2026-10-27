import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

// The landing page's form, end to end through submitInquiry.
vi.mock("@/hooks/use-toast", () => ({ useToast: () => ({ toast: vi.fn() }) }));
const fetchMock = vi.fn();

beforeEach(() => { fetchMock.mockReset(); vi.stubGlobal("fetch", fetchMock); });
afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); });

describe("IntroCallForm", () => {
  it("sends the phone on its own (for Atrium) as well as in the message (for the inbox)", async () => {
    vi.resetModules();
    vi.stubEnv("VITE_CONTACT_ENDPOINT", "https://worker.test");
    const { default: IntroCallForm } = await import("./IntroCallForm");
    render(
      <MemoryRouter initialEntries={["/lp"]}>
        <Routes>
          <Route path="/lp" element={<IntroCallForm source="Google Ads test" thankYouPath="/thanks" />} />
          <Route path="/thanks" element={<p>THANK YOU PAGE</p>} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: "Pat" } });
    fireEvent.change(screen.getByLabelText("Phone"), { target: { value: "(615) 555-1234" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "pat@example.com" } });
    fetchMock.mockResolvedValueOnce(new Response(JSON.stringify({ success: true }), { status: 200 }));
    fireEvent.click(screen.getByRole("button", { name: /request a call back/i }));
    await screen.findByText("THANK YOU PAGE");
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.phone).toBe("(615) 555-1234");
    expect(body.message).toMatch(/^Phone: \(615\) 555-1234/);
  });
});
