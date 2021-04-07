import express from "express";
import axios from "axios";
import { Address } from "./domain/address";
import { Coordinate } from "./domain/coordinate";
import { CalculateDistanceBetweenAddresses } from "./usecase/calculateDistanceBetweenAddresses";
require("dotenv").config();

const routes = express();

const key = process.env.GOOGLE_API_KEY;
const baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";

function makeUrl(streetName: string): string {
  const url = `${baseUrl}?address=${streetName
    .split(" ")
    .join("%")}&key=${key}`;
  return url;
}

routes.get("/distance/addresses", function (req, res) {
  const { addresses } = req.body;

  return new Promise((resolve, reject) => {
    if (addresses.length < 2)
      reject(
        res.status(400).json({
          status: "FAILURE",
          message: "More than one addresses are required!",
        })
      );

    (Promise as any)
      .allSettled(
        addresses.map(
          (address: string): Promise<Address> => {
            const url = makeUrl(address);
            return axios.get(url);
          }
        )
      )
      .then((resp) => {
        let processedAddresses = resp
          .filter((data) => data.status == "fulfilled")
          .map(
            ({ value }): Address => {
              const {
                formatted_address,
                place_id,
                geometry: {
                  location: { lat, lng },
                },
              } = value.data.results[0];

              return new Address(
                formatted_address,
                place_id,
                new Coordinate(lat, lng)
              );
            }
          );

        const distanceBetweenAddresses = new CalculateDistanceBetweenAddresses(
          processedAddresses
        );

        resolve(
          res.json({
            status: "OK",
            data: distanceBetweenAddresses.getAddressesDistanceData(),
          })
        );
      })
      .catch((error) => {
        reject(res.json({ status: "FAILURE", message: error.message }));
      });
  });
});

export default routes;
