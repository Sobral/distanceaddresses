import { Address } from "../domain/address";

type DistanceBetweenAddresses = {
  addresses: string[];
  distance: number;
};

export class CalculateDistanceBetweenAddresses {
  addresses: Address[];
  distanceBetweenAddresses: DistanceBetweenAddresses[];
  furthest: DistanceBetweenAddresses[];
  nearest: DistanceBetweenAddresses[];
  min: number;
  max: number;
  midRange: number;

  constructor(address: Address[]) {
    this.addresses = address;
    this.distanceBetweenAddresses = [];
    this.furthest = [];
    this.nearest = [];

    this.calculateDistanceBetweenAddresses();
    this.getStatisticalDistances();
    this.getClusteredDistances();
  }

  calculateDistanceBetweenAddresses(): void {
    for (let i = 0; i < this.addresses.length; i++) {
      for (let j = i + 1; j < this.addresses.length; j++) {
        this.distanceBetweenAddresses.push({
          addresses: [this.addresses[i].address, this.addresses[j].address],
          distance: this.addresses[i].location.euclidianDistance(
            this.addresses[j].location
          ),
        });
      }
    }
  }

  getStatisticalDistances() {
    const { min, max } = this.distanceBetweenAddresses.reduce(
      ({ min, max }, { distance }) => ({
        min: min < distance ? min : distance,
        max: max > distance ? max : distance,
      }),
      {
        min: this.distanceBetweenAddresses[0].distance,
        max: this.distanceBetweenAddresses[0].distance,
      }
    );

    const midRange = (max - min) / 2;

    this.midRange = midRange;
    this.min = min;
    this.max = max;

    return { min, midRange, max };
  }

  getClusteredDistances() {
    this.distanceBetweenAddresses.forEach((element) => {
      if (element.distance >= this.midRange) {
        this.furthest.push(element);
      } else {
        this.nearest.push(element);
      }
    });
  }

  getAddressesDistanceData() {
    return {
      nearest: this.nearest,
      furthest: this.furthest,
      min: this.min,
      midRange: this.midRange,
      max: this.max,
    };
  }

  getDistanceBetweenAddresses(): DistanceBetweenAddresses[] {
    return this.distanceBetweenAddresses;
  }
}
