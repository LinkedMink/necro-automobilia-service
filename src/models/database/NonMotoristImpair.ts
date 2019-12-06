import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  personNumber: { type: SchemaTypes.Number },
  conditionImpairmentAtTimeOfCrashNonMotorist: { type: SchemaTypes.Number },
  conditionImpairmentAtTimeOfCrashNonMotoristName: { type: SchemaTypes.String },
};

export const nonMotoristImpairSchema = new Schema(schemaDefinition);

export interface INonMotoristImpair extends Types.Subdocument {
  vehicleNumber: number;
  personNumber: number;
  conditionImpairmentAtTimeOfCrashNonMotorist: number;
  conditionImpairmentAtTimeOfCrashNonMotoristName: string;
}
