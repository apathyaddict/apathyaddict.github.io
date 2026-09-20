import "@testing-library/jest-dom/vitest";

// jsdom has no matchMedia; react-slick needs it to exist.
window.matchMedia ??= (query) => ({
  matches: false,
  media: query,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent() {},
});
