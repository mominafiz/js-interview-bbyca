import { removeDuplicates } from "../src/05-remove-dups";

describe("removeDuplicates()", () => {
  it("should return empty array when empty array is passed", () => {
    expect(removeDuplicates([])).toHaveLength(0);
    expect(removeDuplicates([])).toBeInstanceOf(Array);
  });

  it("should return empty array when not an array", () => {
    expect(removeDuplicates(null)).toBeInstanceOf(Array);
    expect(removeDuplicates("string")).toBeInstanceOf(Array);
    expect(removeDuplicates({ a: 1 })).toBeInstanceOf(Array);
  });

  it("should remove duplicate from the array [1, 2, 3, 3, 4, 4, 7]", () => {
    const arr = [1, 2, 3, 3, 4, 4, 7];
    const expected = [1, 2, 3, 4, 7];

    const actual = removeDuplicates(arr);

    expect(actual).toHaveLength(expected.length);
    actual.forEach((value, index) => {
      expect(value).toBe(expected[index]);
    });
  });

  it("should remove duplicate from the array [3, 4, 4, 1, 1, 2, 7]", () => {
    const arr = [3, 4, 4, 1, 1, 2, 7];
    expect(removeDuplicates(arr)).toHaveLength(5);
    expect(removeDuplicates(arr)[0]).toBe(1);
    expect(removeDuplicates(arr)[1]).toBe(2);
    expect(removeDuplicates(arr)[2]).toBe(3);
    expect(removeDuplicates(arr)[3]).toBe(4);
    expect(removeDuplicates(arr)[4]).toBe(7);
  });
});
