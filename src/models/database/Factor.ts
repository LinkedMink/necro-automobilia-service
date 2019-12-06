import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  contributingCircumstancesMotorVehicle: { type: SchemaTypes.Number },
  contributingCircumstancesMotorVehicleName: { type: SchemaTypes.String },
};

export const factorSchema = new Schema(schemaDefinition);

export interface IFactor extends Types.Subdocument {
  contributingCircumstancesMotorVehicle: number;
  contributingCircumstancesMotorVehicleName: string;
}
