import { Coordinate } from "./coordinate";

export class Address {
  address: string;
  place_id: string;
  location: Coordinate;

  constructor(address: string, place_id: string, location: Coordinate) {
    this.address = address;
    this.place_id = place_id;
    this.location = location;
  }
}
