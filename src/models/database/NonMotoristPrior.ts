import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  personNumber: { type: SchemaTypes.Number },
  nonMotoristActionCircumstances: { type: SchemaTypes.Number },
  nonMotoristActionCircumstancesName: { type: SchemaTypes.String },
};

export const nonMotoristPriorSchema = new Schema(schemaDefinition);

export interface INonMotoristPrior extends Types.Subdocument {
  vehicleNumber: number;
  personNumber: number;
  nonMotoristActionCircumstances: number;
  nonMotoristActionCircumstancesName: string;
}
