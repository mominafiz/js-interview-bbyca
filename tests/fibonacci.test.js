import { fibonacci } from "../src/03-fibonacci";

describe("fibonacci", () => {
  it("returns indefinite number of fibonacci numbers", () => {
    expect(fibonacci.next()).toBe(1);
    expect(fibonacci.next()).toBe(1);
    expect(fibonacci.next()).toBe(2);
    expect(fibonacci.next()).toBe(3);
    expect(fibonacci.next()).toBe(5);
    expect(fibonacci.next()).toBe(8);
  });
});
