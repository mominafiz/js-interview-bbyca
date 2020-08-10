import { add } from "../src/01-add";

describe("add()", () => {
  it("should return 7, when add is called as add(2, 5)", () => {
    expect(add(2, 5)).toBe(7);
  });

  it("should return 2, when 2 is passed", () => {
    expect(add(2)).toBe(2);
  });

  it("should return 7, when add is called as add(2)(5)", () => {
    expect(add(2)(5)).toBe(7);
  });
});
