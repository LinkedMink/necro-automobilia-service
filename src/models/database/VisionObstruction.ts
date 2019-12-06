import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  driversVisionObscuredBy: { type: SchemaTypes.Number },
  driversVisionObscuredByName: { type: SchemaTypes.String },
};

export const visionObstructionSchema = new Schema(schemaDefinition);

export interface IVisionObstruction extends Types.Subdocument {
  driversVisionObscuredBy: number;
  driversVisionObscuredByName: string;
}
