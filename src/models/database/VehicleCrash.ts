import { Schema, SchemaTypes, Types } from "mongoose";

import { damageSchema, IDamage } from "./Damage";
import { distractionSchema, IDistraction } from "./Distraction";
import { driverImpairSchema, IDriverImpair } from "./DriverImpair";
import { factorSchema, IFactor } from "./Factor";
import { IManeuver, maneuverSchema } from "./Maneuver";
import { IViolation, violationSchema } from "./Violation";
import { IVisionObstruction, visionObstructionSchema } from "./VisionObstruction";

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
  jackknife: { type: SchemaTypes.String },
  mcidIssuingAuthority: { type: SchemaTypes.Number },
  mcidIdentificationNumber: { type: SchemaTypes.String },
  motorCarrierIdentificationNumberMcid: { type: SchemaTypes.String },
  grossVehicleWeightRating: { type: SchemaTypes.String },
  vehicleConfiguration: { type: SchemaTypes.Number },
  vehicleConfigurationName: { type: SchemaTypes.String },
  cargoBodyType: { type: SchemaTypes.Number },
  cargoBodyTypeName: { type: SchemaTypes.String },
  hazardousMaterialInvolvement: { type: SchemaTypes.String },
  hazardousMaterialPlacard: { type: SchemaTypes.Number },
  hazardousMaterialIdentificationNumber: { type: SchemaTypes.Number },
  hazardousMaterialClassNumber: { type: SchemaTypes.Number },
  releaseOfHazardousMaterialFromTheCargoCompartment: { type: SchemaTypes.String },
  busUse: { type: SchemaTypes.String },
  specialUse: { type: SchemaTypes.Number },
  specialUseName: { type: SchemaTypes.String },
  emergencyMotorVehicleUse: { type: SchemaTypes.String },
  travelSpeed: { type: SchemaTypes.Number },
  underrideOverride: { type: SchemaTypes.Number },
  rollover: { type: SchemaTypes.String },
  locationOfRollover: { type: SchemaTypes.String },
  initialContactPoint: { type: SchemaTypes.Number },
  extentOfDamage: { type: SchemaTypes.String },
  vehicleRemoval: { type: SchemaTypes.String },
  mostHarmfulEvent: { type: SchemaTypes.Number },
  relatedFactorsVehicleLevel1: { type: SchemaTypes.Number },
  relatedFactorsVehicleLevel2: { type: SchemaTypes.Number },
  fireOccurrence: { type: SchemaTypes.String },
  driverPresence: { type: SchemaTypes.String },
  driversLicenseState: { type: SchemaTypes.Number },
  driversZipCode: { type: SchemaTypes.Number },
  nonCdlLicenseStatus: { type: SchemaTypes.Number },
  nonCdlLicenseType: { type: SchemaTypes.String },
  commercialMotorVehicleLicenseStatus: { type: SchemaTypes.Number },
  complianceWithCdlEndorsements: { type: SchemaTypes.String },
  licenseComplianceWithClassOfVehicle: { type: SchemaTypes.String },
  complianceWithLicenseRestrictions: { type: SchemaTypes.Number },
  driverHeight: { type: SchemaTypes.Number },
  driverWeight: { type: SchemaTypes.Number },
  previousRecordedCrashes: { type: SchemaTypes.Number },
  previousRecordedSuspensionsAndRevocations: { type: SchemaTypes.Number },
  previousDwiConvictions: { type: SchemaTypes.Number },
  previousSpeedingConvictions: { type: SchemaTypes.Number },
  previousOtherMovingViolationConvictions: { type: SchemaTypes.Number },
  monthOfFirstCrashSuspensionOrConviction: { type: SchemaTypes.Number },
  yearOfFirstCrashSuspensionOrConviction: { type: SchemaTypes.Number },
  monthOfLastCrashSuspensionOrConviction: { type: SchemaTypes.Number },
  yearOfLastCrashSuspensionOrConviction: { type: SchemaTypes.Number },
  speedingRelated: { type: SchemaTypes.String },
  relatedFactorsDriverLevel1: { type: SchemaTypes.Number },
  relatedFactorsDriverLevel2: { type: SchemaTypes.Number },
  relatedFactorsDriverLevel3: { type: SchemaTypes.Number },
  relatedFactorsDriverLevel4: { type: SchemaTypes.Number },
  trafficwayDescription: { type: SchemaTypes.String },
  totalLanesInRoadway: { type: SchemaTypes.Number },
  speedLimit: { type: SchemaTypes.Number },
  roadwayAlignment: { type: SchemaTypes.String },
  roadwayGrade: { type: SchemaTypes.String },
  roadwaySurfaceType: { type: SchemaTypes.String },
  roadwaySurfaceCondition: { type: SchemaTypes.Number },
  roadwaySurfaceConditionName: { type: SchemaTypes.String },
  trafficControlDevice: { type: SchemaTypes.Number },
  trafficControlDeviceFunctioning: { type: SchemaTypes.String },
  preEventMovementPriorToRecognitionOfCriticalEvent: { type: SchemaTypes.Number },
  criticalEventPrecrash: { type: SchemaTypes.Number },
  criticalEventPrecrashName: { type: SchemaTypes.String },
  attemptedAvoidanceManeuver: { type: SchemaTypes.Number },
  attemptedAvoidanceManeuverName: { type: SchemaTypes.String },
  preImpactStability: { type: SchemaTypes.String },
  preImpactLocation: { type: SchemaTypes.Number },
  crashType: { type: SchemaTypes.Number },
  crashTypeName: { type: SchemaTypes.String },
  fatalitiesInVehicle: { type: SchemaTypes.Number },
  driverDrinking: { type: SchemaTypes.String },
  timestampOfCrash: { type: SchemaTypes.Date },

  damages: [damageSchema],
  distractions: [distractionSchema],
  driversImpair: [driverImpairSchema],
  factors: [factorSchema],
  maneuvers: [maneuverSchema],
  violations: [violationSchema],
  visionObstructions: [visionObstructionSchema],
};

export const vehicleCrashSchema = new Schema(schemaDefinition);

export interface IVehicleCrash extends Types.Subdocument {
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
  jackknife?: string;
  mcidIssuingAuthority?: number;
  mcidIdentificationNumber?: string;
  motorCarrierIdentificationNumberMcid?: string;
  grossVehicleWeightRating?: string;
  vehicleConfiguration?: number;
  vehicleConfigurationName?: string;
  cargoBodyType?: number;
  cargoBodyTypeName?: string;
  hazardousMaterialInvolvement?: string;
  hazardousMaterialPlacard?: number;
  hazardousMaterialIdentificationNumber?: number;
  hazardousMaterialClassNumber?: number;
  releaseOfHazardousMaterialFromTheCargoCompartment?: string;
  busUse?: string;
  specialUse?: number;
  specialUseName?: string;
  emergencyMotorVehicleUse?: string;
  travelSpeed?: number;
  underrideOverride?: number;
  rollover?: string;
  locationOfRollover?: string;
  initialContactPoint?: number;
  extentOfDamage?: string;
  vehicleRemoval?: string;
  mostHarmfulEvent?: number;
  relatedFactorsVehicleLevel1?: number;
  relatedFactorsVehicleLevel2?: number;
  fireOccurrence?: string;
  driverPresence?: string;
  driversLicenseState?: number;
  driversZipCode?: number;
  nonCdlLicenseStatus?: number;
  nonCdlLicenseType?: string;
  commercialMotorVehicleLicenseStatus?: number;
  complianceWithCdlEndorsements?: string;
  licenseComplianceWithClassOfVehicle?: string;
  complianceWithLicenseRestrictions?: number;
  driverHeight?: number;
  driverWeight?: number;
  previousRecordedCrashes?: number;
  previousRecordedSuspensionsAndRevocations?: number;
  previousDwiConvictions?: number;
  previousSpeedingConvictions?: number;
  previousOtherMovingViolationConvictions?: number;
  monthOfFirstCrashSuspensionOrConviction?: number;
  yearOfFirstCrashSuspensionOrConviction?: number;
  monthOfLastCrashSuspensionOrConviction?: number;
  yearOfLastCrashSuspensionOrConviction?: number;
  speedingRelated?: string;
  relatedFactorsDriverLevel1?: number;
  relatedFactorsDriverLevel2?: number;
  relatedFactorsDriverLevel3?: number;
  relatedFactorsDriverLevel4?: number;
  trafficwayDescription?: string;
  totalLanesInRoadway?: number;
  speedLimit?: number;
  roadwayAlignment?: string;
  roadwayGrade?: string;
  roadwaySurfaceType?: string;
  roadwaySurfaceCondition?: number;
  roadwaySurfaceConditionName?: string;
  trafficControlDevice?: number;
  trafficControlDeviceFunctioning?: string;
  preEventMovementPriorToRecognitionOfCriticalEvent?: number;
  criticalEventPrecrash?: number;
  criticalEventPrecrashName?: string;
  attemptedAvoidanceManeuver?: number;
  attemptedAvoidanceManeuverName?: string;
  preImpactStability?: string;
  preImpactLocation?: number;
  crashType?: number;
  crashTypeName?: string;
  fatalitiesInVehicle?: number;
  driverDrinking?: string;
  timestampOfCrash?: Date;

  damages: Types.Array<IDamage>;
  distractions: Types.Array<IDistraction>;
  driversImpair: Types.Array<IDriverImpair>;
  factors: Types.Array<IFactor>;
  maneuvers: Types.Array<IManeuver>;
  violations: Types.Array<IViolation>;
  visionObstructions: Types.Array<IVisionObstruction>;
}
