import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  violationsCharged: { type: SchemaTypes.Number },
  violationsChargedName: { type: SchemaTypes.String },
};

export const violationSchema = new Schema(schemaDefinition);

export interface IViolation extends Types.Subdocument {
  violationsCharged: number;
  violationsChargedName: string;
}
