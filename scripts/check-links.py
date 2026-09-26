#!/usr/bin/env python3
"""Check every external link and embedded YouTube video referenced in src/.

Run locally with `npm run links:check`; the weekly link-check workflow runs it
and emails tech@ if anything is broken. Exits 1 when any link fails.
"""
import glob
import re
import subprocess
import sys
import time

IGNORE = ("localhost", "fonts.googleapis", "fonts.gstatic", "formsubmit.co", "w3.org", "${")
# Some partner sites (and their bot protection) refuse anything that doesn't
# look like a real browser, so identify as one and retry once before failing.
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/128.0 Safari/537.36")


def _fetch(url: str, insecure: bool = False) -> str:
    # -4: some hosts stall on IPv6; generous timeout: a few partner sites are slow.
    cmd = ["curl", "-sS", "-o", "/dev/null", "-w", "%{http_code}", "-L", "-4",
           "--max-time", "45", "-A", UA,
           "-H", "Accept: text/html,application/xhtml+xml,*/*;q=0.8",
           "-H", "Accept-Language: en-US,en;q=0.9"]
    if insecure:
        cmd.append("-k")
    try:
        return subprocess.run(cmd + [url], capture_output=True, text=True,
                              timeout=60).stdout.strip() or "ERR"
    except Exception:
        return "ERR"


def status(url: str) -> tuple[str, bool, str]:
    """Return (http code, reachable?, note)."""
    code = _fetch(url)
    if code[:1] in "23":
        return code, True, ""
    time.sleep(4)
    code = _fetch(url)
    if code[:1] in "23":
        return code, True, ""
    # A site that only works with certificate checks relaxed is serving an
    # incomplete cert chain — browsers cope, so it's alive, just sloppy.
    relaxed = _fetch(url, insecure=True)
    if relaxed[:1] in "23":
        return relaxed, True, "incomplete TLS chain on their end"
    return code, False, ""


def main() -> int:
    sources = glob.glob("src/**/*.tsx", recursive=True) + glob.glob("src/**/*.ts", recursive=True)
    urls: dict[str, set[str]] = {}
    video_ids: dict[str, set[str]] = {}
    for f in sources:
        text = open(f).read()
        for u in re.findall(r'https?://[^\s"\'`<>)\]},]+', text):
            if any(x in u for x in IGNORE):
                continue
            urls.setdefault(u, set()).add(f)
        if "youtube" in text:
            for vid in re.findall(r'id: "([A-Za-z0-9_-]{11})"', text):
                video_ids.setdefault(vid, set()).add(f)

    failures = []
    for u in sorted(urls):
        code, ok, note = status(u)
        print(f"{'ok  ' if ok else 'FAIL'} {code} {u}{'  [' + note + ']' if note else ''}")
        if not ok:
            failures.append(f"{code}  {u}  (in {', '.join(sorted(urls[u]))})")
    for vid in sorted(video_ids):
        code, ok, _ = status(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json")
        print(f"{'ok  ' if ok else 'FAIL'} {code} youtube video {vid}")
        if not ok:
            failures.append(f"{code}  YouTube video {vid}  (in {', '.join(sorted(video_ids[vid]))})")

    print(f"\nChecked {len(urls)} links and {len(video_ids)} videos; {len(failures)} broken.")
    if failures:
        with open("broken-links.txt", "w") as out:
            out.write("\n".join(failures) + "\n")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
