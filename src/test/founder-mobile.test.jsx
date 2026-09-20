import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import App from "../App";

// jsdom does no layout, so these guard the mobile rules themselves:
// the phone header exists, and the stylesheet keeps the phone overrides.
const css = readFileSync(resolve(__dirname, "../CSS/founder.css"), "utf8");
const mobileBlock = css.slice(css.lastIndexOf("@media (max-width: 767px)"));

afterEach(cleanup);

describe("founder page on phones", () => {
  it("has a phone header and a desktop header, each gated by breakpoint", () => {
    window.history.pushState({}, "", "/dev");
    render(<App />);
    const names = screen.getAllByRole("heading", { name: "Ève Aimée Seni" });
    expect(names).toHaveLength(2);
    const [phone, desktop] = names.map((h) => h.closest("header"));
    expect(phone.className).toContain("md:hidden");
    expect(desktop.className).toContain("hidden md:flex");
  });

  it("keeps the phone overrides: slim hero, no sticky, small portrait, flat photo grid", () => {
    expect(mobileBlock).toMatch(/\.hero[\s\S]*?height:\s*200px/);
    expect(mobileBlock).toMatch(/\.stay\.stay[\s\S]*?position:\s*relative/);
    expect(mobileBlock).toMatch(/\.portrait[\s\S]*?width:\s*140px/);
    expect(mobileBlock).toMatch(/\.moments figure[\s\S]*?position:\s*static/);
    expect(mobileBlock).toMatch(/\.sky-photo,\s*\.founder-page \.stack-photo[\s\S]*?display:\s*none/);
  });
});
