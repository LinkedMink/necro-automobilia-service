import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  driverDistractedBy: { type: SchemaTypes.Number },
  driverDistractedByName: { type: SchemaTypes.Number },
};

export const distractionSchema = new Schema(schemaDefinition);

export interface IDistraction extends Types.Subdocument {
  driverDistractedBy: number;
  driverDistractedByName: number;
}
