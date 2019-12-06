import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  driverManeuveredToAvoid: { type: SchemaTypes.Number },
  driverManeuveredToAvoidName: { type: SchemaTypes.String },
};

export const maneuverSchema = new Schema(schemaDefinition);

export interface IManeuver extends Types.Subdocument {
  driverManeuveredToAvoid: number;
  driverManeuveredToAvoidName: string;
}
