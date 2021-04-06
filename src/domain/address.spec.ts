import { Address } from "./address";
import { Coordinate } from "./coordinate";

describe("Address", () => {
  test("should create address", () => {
    const {
      address,
      place_id,
      location: { lat, lng },
    } = new Address(
      "any_address_name",
      "any_place_id",
      new Coordinate(89.8, 88.5)
    );

    expect(address).toBe("any_address_name");
    expect(place_id).toBe("any_place_id");
    expect(lat).toBe(89.8);
    expect(lng).toBe(88.5);
  });
});
