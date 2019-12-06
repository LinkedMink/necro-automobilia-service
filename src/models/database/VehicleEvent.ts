import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  eventNumber: { type: SchemaTypes.Number },
  vehicleNumber: { type: SchemaTypes.Number },
  vehicleEventNumber: { type: SchemaTypes.Number },
  vehicleNumberThisVehicle: { type: SchemaTypes.Number },
  areaOfImpactThisVehicle: { type: SchemaTypes.Number },
  areaOfImpactThisVehicleName: { type: SchemaTypes.String },
  sequenceOfEvents: { type: SchemaTypes.Number },
  sequenceOfEventsName: { type: SchemaTypes.String },
  vehicleNumberOtherVehicle: { type: SchemaTypes.Number },
  areaOfImpactOtherVehicle: { type: SchemaTypes.Number },
  areaOfImpactOtherVehicleName: { type: SchemaTypes.String },
};

export const vehicleEventSchema = new Schema(schemaDefinition);

export interface IVehicleEvent extends Types.Subdocument {
  eventNumber?: number;
  vehicleNumber?: number;
  vehicleEventNumber?: number;
  vehicleNumberThisVehicle?: number;
  areaOfImpactThisVehicle?: number;
  areaOfImpactThisVehicleName?: string;
  sequenceOfEvents?: number;
  sequenceOfEventsName?: string;
  vehicleNumberOtherVehicle?: number;
  areaOfImpactOtherVehicle?: number;
  areaOfImpactOtherVehicleName?: string;
}
