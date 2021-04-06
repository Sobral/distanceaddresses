import { Coordinate } from "./coordinate";

describe("Coordinate", () => {
  test("should create Coordinate", () => {
    const { lat, lng } = new Coordinate(89.8, 88.5);

    expect(lat).toBe(89.8);
    expect(lng).toBe(88.5);
  });

  test("should calculate euclidian distance from another Coordinate", () => {
    const sut = new Coordinate(76, 80);

    const expected = sut.euclidianDistance(new Coordinate(70, 56));

    expect(Number(expected.toFixed(2))).toBe(24.74);
  });
});
