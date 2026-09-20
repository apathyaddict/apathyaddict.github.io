import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";
import { data as projects } from "../data/projects";
import { watercolours } from "../data/watercolours";
import { paintings } from "../data/paintings";

const renderAt = (path) => {
  window.history.pushState({}, "", path);
  return render(<App />);
};

afterEach(cleanup);

describe("landing page /", () => {
  it("shows the name and both section links", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: /Ève Aimée Seni/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Developer" })).toHaveAttribute("href", "/dev");
    expect(screen.getByRole("link", { name: "Artist" })).toHaveAttribute("href", "/art");
  });
});

describe("dev page /dev", () => {
  it("renders nav, every section and all project cards", () => {
    renderAt("/dev");
    for (const label of ["Projects", "Skills", "Contact"]) {
      expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: label })).toBeInTheDocument();
    }
    for (const project of projects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: "Art Portfolio" })).toHaveAttribute("href", "/art");
  });
});

describe("art pages", () => {
  it("/art renders the portfolio home with carousel and contact", () => {
    renderAt("/art");
    expect(screen.getByRole("heading", { name: /PORTFOLIO/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Raison d'être/ })).toBeInTheDocument();
    expect(screen.getAllByText("Bath Windows").length).toBeGreaterThan(0);
  });

  it("/art/prints renders every watercolour", () => {
    renderAt("/art/prints");
    expect(screen.getAllByRole("img").length).toBeGreaterThanOrEqual(watercolours.length);
  });

  it("/art/paintings renders every painting", () => {
    renderAt("/art/paintings");
    expect(screen.getByText(/Not for printing or resale/)).toBeInTheDocument();
    expect(screen.getAllByRole("img").length).toBeGreaterThanOrEqual(paintings.length);
  });
});
