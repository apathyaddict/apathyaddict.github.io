import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";
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
    expect(screen.getByRole("link", { name: "Founder" })).toHaveAttribute("href", "/dev");
    expect(screen.getByRole("link", { name: "Artist" })).toHaveAttribute("href", "/art");
  });
});

describe("founder page /dev", () => {
  it("renders hero, about, milestones, projects, stack and contact", () => {
    renderAt("/dev");
    expect(screen.getByLabelText("Founder, Tech Lead")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Ève" })).toBeInTheDocument();
    expect(screen.getByText(/co-founder and tech lead of/)).toBeInTheDocument();
    expect(screen.getByText(/Why does this look like a museum/)).toBeInTheDocument();
    expect(screen.getByText("Full-time CTO & co-founder")).toBeInTheDocument();
    expect(screen.getAllByRole("figure")).toHaveLength(4);
    expect(screen.getByText("BVZ Scale-Up Innovator Award · $15,000")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /locvm\.ca/i })).toHaveAttribute("href", "https://www.locvm.ca");
    expect(screen.getByText("98k")).toBeInTheDocument();
    expect(screen.getByText("Geospatial job search & map")).toBeInTheDocument();
    expect(screen.getByText("cv-editor").closest("a")).toBeNull();
    expect(screen.getByText("AWS server").closest("a")).toHaveAttribute("href", "https://github.com/apathyaddict/lambdaserverAskB");
    expect(screen.getByText(/Photoshop/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:eve@locvm.ca");
  });

  it("/founder redirects to /dev", () => {
    renderAt("/founder");
    expect(window.location.pathname).toBe("/dev");
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
