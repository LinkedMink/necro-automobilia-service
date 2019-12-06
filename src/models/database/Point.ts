import { Schema, SchemaTypes, Types } from "mongoose";

export const validateCoordinates = (coordinates: number[]) => {
  return coordinates[0] >= -180 &&
    coordinates[0] <= 180 &&
    coordinates[1] >= -90 &&
    coordinates[1] <= 90;
};

const schemaDefinition = new Schema({
  type: {
    type: SchemaTypes.String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [SchemaTypes.Number],
    validate: [validateCoordinates, "-180 <= Longitude <= 180, -90 <= <= 90"],
    required: true,
  },
});

export const pointSchema = new Schema(schemaDefinition);

export interface IPoint extends Types.Subdocument {
  type: string;
  coordinates: number[];
}
