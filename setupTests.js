import "@testing-library/jest-dom"

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    media: "",
    onchange: null,
    addListener() {}, // deprecated
    removeListener() {}, // deprecated
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {},
  };
};