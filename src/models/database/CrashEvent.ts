import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  eventNumber: { type: SchemaTypes.Number },
  vehicleNumberThisVehicle: { type: SchemaTypes.Number },
  areaOfImpactThisVehicle: { type: SchemaTypes.Number },
  areaOfImpactThisVehicleName: { type: SchemaTypes.String },
  sequenceOfEvents: { type: SchemaTypes.Number },
  sequenceOfEventsName: { type: SchemaTypes.String },
  vehicleNumberOtherVehicle: { type: SchemaTypes.Number },
  areaOfImpactOtherVehicle: { type: SchemaTypes.Number },
  areaOfImpactOtherVehicleName: { type: SchemaTypes.String },
};

export const crashEventSchema = new Schema(schemaDefinition);

export interface ICrashEvent extends Types.Subdocument {
  eventNumber?: number;
  vehicleNumberThisVehicle?: number;
  areaOfImpactThisVehicle?: number;
  areaOfImpactThisVehicleName?: string;
  sequenceOfEvents?: number;
  sequenceOfEventsName?: string;
  vehicleNumberOtherVehicle?: number;
  areaOfImpactOtherVehicle?: number;
  areaOfImpactOtherVehicleName?: string;
}
