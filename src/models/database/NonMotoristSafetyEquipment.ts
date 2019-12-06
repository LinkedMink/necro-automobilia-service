import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  personNumber: { type: SchemaTypes.Number },
  nonMotoristSafetyEquipmentUse: { type: SchemaTypes.String },
};

export const nonMotoristSafetyEquipmentSchema = new Schema(schemaDefinition);

export interface INonMotoristSafetyEquipment extends Types.Subdocument {
  vehicleNumber: number;
  personNumber: number;
  nonMotoristSafetyEquipmentUse: string;
}
