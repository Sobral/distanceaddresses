export class Coordinate {
  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  euclidianDistance(place: Coordinate): number {
    function moduleSquare(a: number, b: number): number {
      return Math.pow(b - a, 2);
    }

    const latModuleSquare = moduleSquare(this.lat, place.lat);
    const lngModuleSquare = moduleSquare(this.lng, place.lng);

    return Math.sqrt(latModuleSquare + lngModuleSquare);
  }
}
