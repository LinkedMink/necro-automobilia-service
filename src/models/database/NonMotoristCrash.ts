import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  personNumber: { type: SchemaTypes.Number },
  nonMotoristContributingCircumstances: { type: SchemaTypes.Number },
  nonMotoristContributingCircumstancesName: { type: SchemaTypes.String },
};

export const nonMotoristCrashSchema = new Schema(schemaDefinition);

export interface INonMotoristCrash extends Types.Subdocument {
  vehicleNumber: number;
  personNumber: number;
  nonMotoristContributingCircumstances: number;
  nonMotoristContributingCircumstancesName: string;
}
