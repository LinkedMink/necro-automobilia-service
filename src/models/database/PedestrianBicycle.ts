import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  personNumber: { type: SchemaTypes.Number },
  personType: { type: SchemaTypes.Number },
  personTypeName: { type: SchemaTypes.String },
  age: { type: SchemaTypes.Number },
  sex: { type: SchemaTypes.String },
  markedCrosswalkPresent: { type: SchemaTypes.String },
  sidewalkPresent: { type: SchemaTypes.String },
  schoolZone: { type: SchemaTypes.String },
  crashTypePedestrian: { type: SchemaTypes.Number },
  crashTypePedestrianName: { type: SchemaTypes.String },
  crashTypeBicycle: { type: SchemaTypes.Number },
  crashTypeBicycleName: { type: SchemaTypes.String },
  crashLocationPedestrian: { type: SchemaTypes.String },
  crashLocationBicycle: { type: SchemaTypes.String },
  pedestrianPosition: { type: SchemaTypes.String },
  bicyclistPosition: { type: SchemaTypes.String },
  pedestrianInitialDirectionOfTravel: { type: SchemaTypes.String },
  bicyclistInitialDirectionOfTravel: { type: SchemaTypes.String },
  motoristInitialDirectionOfTravel: { type: SchemaTypes.String },
  motoristManeuver: { type: SchemaTypes.String },
  intersectionLeg: { type: SchemaTypes.String },
  pedestrianScenario: { type: SchemaTypes.String },
  pedestrianScenarioName: { type: SchemaTypes.String },
  crashGroupPedestrian: { type: SchemaTypes.Number },
  crashGroupPedestrianName: { type: SchemaTypes.String },
  crashGroupBicycle: { type: SchemaTypes.Number },
  crashGroupBicycleName: { type: SchemaTypes.String },
};

export const pedestrianBicycleSchema = new Schema(schemaDefinition);

export interface IPedestrianBicycle extends Types.Subdocument {
  vehicleNumber?: number;
  personNumber?: number;
  personType?: number;
  personTypeName?: string;
  age?: number;
  sex?: string;
  markedCrosswalkPresent?: string;
  sidewalkPresent?: string;
  schoolZone?: string;
  crashTypePedestrian?: number;
  crashTypePedestrianName?: string;
  crashTypeBicycle?: number;
  crashTypeBicycleName?: string;
  crashLocationPedestrian?: string;
  crashLocationBicycle?: string;
  pedestrianPosition?: string;
  bicyclistPosition?: string;
  pedestrianInitialDirectionOfTravel?: string;
  bicyclistInitialDirectionOfTravel?: string;
  motoristInitialDirectionOfTravel?: string;
  motoristManeuver?: string;
  intersectionLeg?: string;
  pedestrianScenario?: string;
  pedestrianScenarioName?: string;
  crashGroupPedestrian?: number;
  crashGroupPedestrianName?: string;
  crashGroupBicycle?: number;
  crashGroupBicycleName?: string;
}
