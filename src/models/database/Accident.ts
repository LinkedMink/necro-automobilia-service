import { Document, model, Schema, SchemaTypes, Types } from "mongoose";

import { crashEventSchema, ICrashEvent } from "./CrashEvent";
import { INonMotoristCrash, nonMotoristCrashSchema } from "./NonMotoristCrash";
import { INonMotoristImpair, nonMotoristImpairSchema } from "./NonMotoristImpair";
import { INonMotoristPrior, nonMotoristPriorSchema } from "./NonMotoristPrior";
import { INonMotoristSafetyEquipment, nonMotoristSafetyEquipmentSchema } from "./NonMotoristSafetyEquipment";
import { IParkWorkVehicle, parkWorkVehicleSchema } from "./ParkWorkVehicle";
import { IPedestrianBicycle, pedestrianBicycleSchema } from "./PedestrianBicycle";
import { IPerson, personSchema } from "./Person";
import { IPoint, pointSchema } from "./Point";
import { IVehicleCrash, vehicleCrashSchema } from "./VehicleCrash";
import { IVehicleDetail, vehicleDetailSchema } from "./VehicleDetails";
import { IVehicleEvent, vehicleEventSchema } from "./VehicleEvent";

const accidentSchema = new Schema({
  consecutiveNumber: {
    type: SchemaTypes.Number,
    index: true,
  },
  stateNumber: { type: SchemaTypes.Number },
  stateName: { type: SchemaTypes.String },
  numberOfVehicleFormsSubmittedAll: { type: SchemaTypes.Number },
  numberOfMotorVehiclesInTransportMvit: { type: SchemaTypes.Number },
  numberOfParkedWorkingVehicles: { type: SchemaTypes.Number },
  numberOfFormsSubmittedForPersonsNotInMotorVehicles: { type: SchemaTypes.Number },
  numberOfPersonsNotInMotorVehiclesInTransportMvit: { type: SchemaTypes.Number },
  numberOfPersonsInMotorVehiclesInTransportMvit: { type: SchemaTypes.Number },
  numberOfFormsSubmittedForPersonsInMotorVehicles: { type: SchemaTypes.Number },
  county: { type: SchemaTypes.Number },
  city: { type: SchemaTypes.Number },
  dayOfCrash: { type: SchemaTypes.Number },
  monthOfCrash: { type: SchemaTypes.Number },
  yearOfCrash: { type: SchemaTypes.Number },
  dayOfWeek: { type: SchemaTypes.Number },
  hourOfCrash: { type: SchemaTypes.Number },
  minuteOfCrash: { type: SchemaTypes.Number },
  nationalHighwaySystem: { type: SchemaTypes.Number },
  landUse: { type: SchemaTypes.Number },
  landUseName: { type: SchemaTypes.String },
  functionalSystem: { type: SchemaTypes.Number },
  functionalSystemName: { type: SchemaTypes.String },
  ownership: { type: SchemaTypes.Number },
  ownershipName: { type: SchemaTypes.String },
  routeSigning: { type: SchemaTypes.Number },
  routeSigningName: { type: SchemaTypes.String },
  trafficwayIdentifier: { type: SchemaTypes.String },
  trafficwayIdentifier2: { type: SchemaTypes.String },
  milepoint: { type: SchemaTypes.Number },
  /*
  latitude: { type: SchemaTypes.Number },
  longitude: { type: SchemaTypes.Number },
  */
  location: {
    type: pointSchema,
    index: { type: "2dsphere" },
  },
  specialJurisdiction: { type: SchemaTypes.Number },
  specialJurisdictionName: { type: SchemaTypes.String },
  firstHarmfulEvent: { type: SchemaTypes.Number },
  firstHarmfulEventName: { type: SchemaTypes.String },
  mannerOfCollision: { type: SchemaTypes.Number },
  mannerOfCollisionName: { type: SchemaTypes.String },
  relationToJunctionWithinInterchangeArea: { type: SchemaTypes.String },
  relationToJunctionSpecificLocation: { type: SchemaTypes.Number },
  relationToJunctionSpecificLocationName: { type: SchemaTypes.String },
  typeOfIntersection: { type: SchemaTypes.String },
  workZone: { type: SchemaTypes.String },
  relationToTrafficway: { type: SchemaTypes.Number },
  relationToTrafficwayName: { type: SchemaTypes.String },
  lightCondition: { type: SchemaTypes.Number },
  lightConditionName: { type: SchemaTypes.String },
  atmosphericConditions1: { type: SchemaTypes.Number },
  atmosphericConditions1Name: { type: SchemaTypes.String },
  atmosphericConditions2: { type: SchemaTypes.Number },
  atmosphericConditions2Name: { type: SchemaTypes.String },
  atmosphericConditions: { type: SchemaTypes.Number },
  atmosphericConditionsName: { type: SchemaTypes.String },
  schoolBusRelated: { type: SchemaTypes.String },
  railGradeCrossingIdentifier: { type: SchemaTypes.String },
  hourOfNotification: { type: SchemaTypes.Number },
  minuteOfNotification: { type: SchemaTypes.Number },
  hourOfArrivalAtScene: { type: SchemaTypes.Number },
  minuteOfArrivalAtScene: { type: SchemaTypes.Number },
  hourOfEmsArrivalAtHospital: { type: SchemaTypes.Number },
  minuteOfEmsArrivalAtHospital: { type: SchemaTypes.Number },
  relatedFactorsCrashLevel1: { type: SchemaTypes.Number },
  relatedFactorsCrashLevel1Name: { type: SchemaTypes.String },
  relatedFactorsCrashLevel2: { type: SchemaTypes.Number },
  relatedFactorsCrashLevel2Name: { type: SchemaTypes.String },
  relatedFactorsCrashLevel3: { type: SchemaTypes.Number },
  relatedFactorsCrashLevel3Name: { type: SchemaTypes.String },
  numberOfFatalities: { type: SchemaTypes.Number },
  numberOfDrunkDrivers: { type: SchemaTypes.Number },
  timestampOfCrash: {
    type: SchemaTypes.Date,
    index: true,
  },

  crashEvents: [crashEventSchema],
  nonMotoristsCrash: [nonMotoristCrashSchema],
  nonMotoristsImpair: [nonMotoristImpairSchema],
  nonMotoristsPrior: [nonMotoristPriorSchema],
  nonMotoristsSafetyEquipment: [nonMotoristSafetyEquipmentSchema],
  parkWorkVehicles: [parkWorkVehicleSchema],
  pedestrianBicycles: [pedestrianBicycleSchema],
  persons: [personSchema],
  vehicleCrashs: [vehicleCrashSchema],
  vehicleDetails: [vehicleDetailSchema],
  vehicleEvents: [vehicleEventSchema],
});

accidentSchema.index(
  { consecutiveNumber: 1, yearOfCrash: 1},
  { unique: true });

export interface IAccident extends Document {
  consecutiveNumber?: number;
  stateNumber?: number;
  stateName?: string;
  numberOfVehicleFormsSubmittedAll?: number;
  numberOfMotorVehiclesInTransportMvit?: number;
  numberOfParkedWorkingVehicles?: number;
  numberOfFormsSubmittedForPersonsNotInMotorVehicles?: number;
  numberOfPersonsNotInMotorVehiclesInTransportMvit?: number;
  numberOfPersonsInMotorVehiclesInTransportMvit?: number;
  numberOfFormsSubmittedForPersonsInMotorVehicles?: number;
  county?: number;
  city?: number;
  dayOfCrash?: number;
  monthOfCrash?: number;
  yearOfCrash?: number;
  dayOfWeek?: number;
  hourOfCrash?: number;
  minuteOfCrash?: number;
  nationalHighwaySystem?: number;
  landUse?: number;
  landUseName?: string;
  functionalSystem?: number;
  functionalSystemName?: string;
  ownership?: number;
  ownershipName?: string;
  routeSigning?: number;
  routeSigningName?: string;
  trafficwayIdentifier?: string;
  trafficwayIdentifier2?: string;
  milepoint?: number;
  /*
  latitude?: number;
  longitude?: number;
  */
  location?: IPoint;
  specialJurisdiction?: number;
  specialJurisdictionName?: string;
  firstHarmfulEvent?: number;
  firstHarmfulEventName?: string;
  mannerOfCollision?: number;
  mannerOfCollisionName?: string;
  relationToJunctionWithinInterchangeArea?: string;
  relationToJunctionSpecificLocation?: number;
  relationToJunctionSpecificLocationName?: string;
  typeOfIntersection?: string;
  workZone?: string;
  relationToTrafficway?: number;
  relationToTrafficwayName?: string;
  lightCondition?: number;
  lightConditionName?: string;
  atmosphericConditions1?: number;
  atmosphericConditions1Name?: string;
  atmosphericConditions2?: number;
  atmosphericConditions2Name?: string;
  atmosphericConditions?: number;
  atmosphericConditionsName?: string;
  schoolBusRelated?: string;
  railGradeCrossingIdentifier?: string;
  hourOfNotification?: number;
  minuteOfNotification?: number;
  hourOfArrivalAtScene?: number;
  minuteOfArrivalAtScene?: number;
  hourOfEmsArrivalAtHospital?: number;
  minuteOfEmsArrivalAtHospital?: number;
  relatedFactorsCrashLevel1?: number;
  relatedFactorsCrashLevel1Name?: string;
  relatedFactorsCrashLevel2?: number;
  relatedFactorsCrashLevel2Name?: string;
  relatedFactorsCrashLevel3?: number;
  relatedFactorsCrashLevel3Name?: string;
  numberOfFatalities?: number;
  numberOfDrunkDrivers?: number;
  timestampOfCrash?: Date;

  crashEvents: Types.Array<ICrashEvent>;
  nonMotoristsCrash: Types.Array<INonMotoristCrash>;
  nonMotoristsImpair: Types.Array<INonMotoristImpair>;
  nonMotoristsPrior: Types.Array<INonMotoristPrior>;
  nonMotoristsSafetyEquipment: Types.Array<INonMotoristSafetyEquipment>;
  parkWorkVehicles: Types.Array<IParkWorkVehicle>;
  pedestrianBicycles: Types.Array<IPedestrianBicycle>;
  persons: Types.Array<IPerson>;
  vehicleCrashs: Types.Array<IVehicleCrash>;
  vehicleDetails: Types.Array<IVehicleDetail>;
  vehicleEvents: Types.Array<IVehicleEvent>;
}

export const Accident = model<IAccident>("Accident", accidentSchema);
