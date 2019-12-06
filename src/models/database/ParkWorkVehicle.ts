import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  numberOfMotorVehiclesInTransportMvit: { type: SchemaTypes.Number },
  numberOfOccupants: { type: SchemaTypes.Number },
  dayOfCrash: { type: SchemaTypes.Number },
  monthOfCrash: { type: SchemaTypes.Number },
  hourOfCrash: { type: SchemaTypes.Number },
  minuteOfCrash: { type: SchemaTypes.Number },
  firstHarmfulEvent: { type: SchemaTypes.Number },
  firstHarmfulEventName: { type: SchemaTypes.String },
  mannerOfCollision: { type: SchemaTypes.Number },
  mannerOfCollisionName: { type: SchemaTypes.String },
  unitType: { type: SchemaTypes.String },
  hitAndRun: { type: SchemaTypes.String },
  registrationState: { type: SchemaTypes.Number },
  registrationStateName: { type: SchemaTypes.String },
  registeredVehicleOwner: { type: SchemaTypes.Number },
  registeredVehicleOwnerName: { type: SchemaTypes.String },
  vehicleMake: { type: SchemaTypes.Number },
  vehicleMakeName: { type: SchemaTypes.String },
  vehicleModel: { type: SchemaTypes.Number },
  makeModelCombined: { type: SchemaTypes.Number },
  bodyType: { type: SchemaTypes.Number },
  bodyTypeName: { type: SchemaTypes.String },
  vehicleModelYear: { type: SchemaTypes.Number },
  vehicleIdentificationNumberVin: { type: SchemaTypes.String },
  vehicleTrailing: { type: SchemaTypes.String },
  mcidIssuingAuthority: { type: SchemaTypes.Number },
  mcidIssuingAuthorityName: { type: SchemaTypes.String },
  mcidIdentificationNumber: { type: SchemaTypes.String },
  motorCarrierIdentificationNumber: { type: SchemaTypes.String },
  grossVehicleWeightRating: { type: SchemaTypes.Number },
  vehicleConfiguration: { type: SchemaTypes.Number },
  cargoBodyType: { type: SchemaTypes.Number },
  hazardousMaterialInvolvement: { type: SchemaTypes.String },
  hazardousMaterialPlacard: { type: SchemaTypes.String },
  hazardousMaterialIdentificationNumber: { type: SchemaTypes.Number },
  hazardousMaterialClassNumber: { type: SchemaTypes.Number },
  releaseOfHazardousMaterialFromTheCargoCompartment: { type: SchemaTypes.String },
  busUse: { type: SchemaTypes.String },
  specialUse: { type: SchemaTypes.Number },
  specialUseName: { type: SchemaTypes.String },
  emergencyMotorVehicleUse: { type: SchemaTypes.String },
  underrideOverride: { type: SchemaTypes.Number },
  underrideOverrideName: { type: SchemaTypes.String },
  initialContactPoint: { type: SchemaTypes.Number },
  extentOfDamage: { type: SchemaTypes.String },
  vehicleRemoval: { type: SchemaTypes.String },
  mostHarmfulEvent: { type: SchemaTypes.Number },
  relatedFactorsVehicleLevel1: { type: SchemaTypes.Number },
  relatedFactorsVehicleLevel2: { type: SchemaTypes.Number },
  fireOccurrence: { type: SchemaTypes.String },
  fatalitiesInVehicle: { type: SchemaTypes.Number },
};

export const parkWorkVehicleSchema = new Schema(schemaDefinition);

export interface IParkWorkVehicle extends Types.Subdocument {
  vehicleNumber?: number;
  numberOfMotorVehiclesInTransportMvit?: number;
  numberOfOccupants?: number;
  dayOfCrash?: number;
  monthOfCrash?: number;
  hourOfCrash?: number;
  minuteOfCrash?: number;
  firstHarmfulEvent?: number;
  firstHarmfulEventName?: string;
  mannerOfCollision?: number;
  mannerOfCollisionName?: string;
  unitType?: string;
  hitAndRun?: string;
  registrationState?: number;
  registrationStateName?: string;
  registeredVehicleOwner?: number;
  registeredVehicleOwnerName?: string;
  vehicleMake?: number;
  vehicleMakeName?: string;
  vehicleModel?: number;
  makeModelCombined?: number;
  bodyType?: number;
  bodyTypeName?: string;
  vehicleModelYear?: number;
  vehicleIdentificationNumberVin?: string;
  vehicleTrailing?: string;
  mcidIssuingAuthority?: number;
  mcidIssuingAuthorityName?: string;
  mcidIdentificationNumber?: string;
  motorCarrierIdentificationNumber?: string;
  grossVehicleWeightRating?: number;
  vehicleConfiguration?: number;
  cargoBodyType?: number;
  hazardousMaterialInvolvement?: string;
  hazardousMaterialPlacard?: string;
  hazardousMaterialIdentificationNumber?: number;
  hazardousMaterialClassNumber?: number;
  releaseOfHazardousMaterialFromTheCargoCompartment?: string;
  busUse?: string;
  specialUse?: number;
  specialUseName?: string;
  emergencyMotorVehicleUse?: string;
  underrideOverride?: number;
  underrideOverrideName?: string;
  initialContactPoint?: number;
  extentOfDamage?: string;
  vehicleRemoval?: string;
  mostHarmfulEvent?: number;
  relatedFactorsVehicleLevel1?: number;
  relatedFactorsVehicleLevel2?: number;
  fireOccurrence?: string;
  fatalitiesInVehicle?: number;
}
