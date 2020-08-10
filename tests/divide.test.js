import { divide, callback } from "../src/02-divide";

describe("divide", () => {
  it("should return 5 when 10 and 2 are passed", () => {
    const value = divide(10, 2, callback);
    expect(value).toBe(5);
  });

  it("should throw an error when divided by 0", () => {
    try {
      divide(5, 0, callback);
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toContain("Cannot divide by 0");
    }
  });
});
