import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  numberOfMotorVehiclesInTransportMvit: { type: SchemaTypes.Number },
  vehicleNumber: { type: SchemaTypes.Number },
  personNumber: { type: SchemaTypes.Number },
  numberOfMotorVehicleStrikingNonMotorist: { type: SchemaTypes.Number },
  county: { type: SchemaTypes.Number },
  dayOfCrash: { type: SchemaTypes.Number },
  monthOfCrash: { type: SchemaTypes.Number },
  hourOfCrash: { type: SchemaTypes.Number },
  minuteOfCrash: { type: SchemaTypes.Number },
  landUse: { type: SchemaTypes.String },
  landUseName: { type: SchemaTypes.String },
  functionalSystem: { type: SchemaTypes.String },
  functionalSystemName: { type: SchemaTypes.String },
  firstHarmfulEvent: { type: SchemaTypes.Number },
  firstHarmfulEventName: { type: SchemaTypes.String },
  mannerOfCollision: { type: SchemaTypes.Number },
  mannerOfCollisionName: { type: SchemaTypes.String },
  schoolBusRelated: { type: SchemaTypes.String },
  vehicleMake: { type: SchemaTypes.Number },
  vehicleMakeName: { type: SchemaTypes.String },
  makeModelCombined: { type: SchemaTypes.Number },
  bodyType: { type: SchemaTypes.Number },
  bodyTypeName: { type: SchemaTypes.String },
  vehicleTrailing: { type: SchemaTypes.String },
  specialUse: { type: SchemaTypes.Number },
  specialUseName: { type: SchemaTypes.String },
  emergencyMotorVehicleUse: { type: SchemaTypes.String },
  rollover: { type: SchemaTypes.String },
  initialContactPoint: { type: SchemaTypes.Number },
  initialContactPointName: { type: SchemaTypes.String },
  fireOccurrence: { type: SchemaTypes.String },
  age: { type: SchemaTypes.Number },
  sex: { type: SchemaTypes.String },
  personType: { type: SchemaTypes.Number },
  personTypeName: { type: SchemaTypes.String },
  injurySeverity: { type: SchemaTypes.Number },
  injurySeverityName: { type: SchemaTypes.String },
  seatingPosition: { type: SchemaTypes.Number },
  seatingPositionName: { type: SchemaTypes.String },
  restraintSystemHelmetUse: { type: SchemaTypes.Number },
  restraintSystemHelmetUseName: { type: SchemaTypes.String },
  indicationOfMisuseOfRestraintSystemHelmet: { type: SchemaTypes.String },
  airBagDeployed: { type: SchemaTypes.Number },
  airBagDeployedName: { type: SchemaTypes.String },
  ejection: { type: SchemaTypes.Number },
  ejectionName: { type: SchemaTypes.String },
  ejectionPath: { type: SchemaTypes.Number },
  ejectionPathName: { type: SchemaTypes.String },
  extrication: { type: SchemaTypes.String },
  policeReportedAlcoholInvolvement: { type: SchemaTypes.String },
  methodOfAlcoholDeterminationByPolice: { type: SchemaTypes.String },
  alcoholTestStatus1: { type: SchemaTypes.String },
  alcoholTestStatus2: { type: SchemaTypes.String },
  alcoholTestStatus3: { type: SchemaTypes.String },
  alcoholTestStatus3Name: { type: SchemaTypes.String },
  policeReportedDrugInvolvement: { type: SchemaTypes.String },
  methodOfDrugDeterminationByPolice: { type: SchemaTypes.String },
  drugTestStatus: { type: SchemaTypes.String },
  drugTestType1: { type: SchemaTypes.String },
  drugTestType2: { type: SchemaTypes.String },
  drugTestType3: { type: SchemaTypes.String },
  drugTestType4: { type: SchemaTypes.Number },
  drugTestType4Name: { type: SchemaTypes.String },
  drugTestType5: { type: SchemaTypes.Number },
  drugTestType5Name: { type: SchemaTypes.String },
  drugTestType6: { type: SchemaTypes.Number },
  drugTestType6Name: { type: SchemaTypes.String },
  transportedToFirstTreatmentFacility: { type: SchemaTypes.Number },
  transportedToFirstTreatmentFacilityName: { type: SchemaTypes.String },
  diedAtSceneEnRoute: { type: SchemaTypes.String },
  dayOfDeath: { type: SchemaTypes.Number },
  monthOfDeath: { type: SchemaTypes.Number },
  yearOfDeath: { type: SchemaTypes.Number },
  hourOfDeath: { type: SchemaTypes.Number },
  minuteOfDeath: { type: SchemaTypes.Number },
  deathTime: { type: SchemaTypes.Number },
  lagHours: { type: SchemaTypes.Number },
  lagMinutes: { type: SchemaTypes.Number },
  relatedFactorsPersonLevel1: { type: SchemaTypes.Number },
  relatedFactorsPersonLevel2: { type: SchemaTypes.Number },
  relatedFactorsPersonLevel3: { type: SchemaTypes.Number },
  fatalInjuryAtWork: { type: SchemaTypes.String },
  hispanicOrigin: { type: SchemaTypes.Number },
  hispanicOriginName: { type: SchemaTypes.String },
  race: { type: SchemaTypes.Number },
  raceName: { type: SchemaTypes.String },
  nonMotoristLocationAtTimeOfCrash: { type: SchemaTypes.Number },
  nonMotoristLocationAtTimeOfCrashName: { type: SchemaTypes.String },
  timestampOfCrash: { type: SchemaTypes.Date },
};

export const personSchema = new Schema(schemaDefinition);

export interface IPerson extends Types.Subdocument {
  numberOfMotorVehiclesInTransportMvit?: number;
  vehicleNumber?: number;
  personNumber?: number;
  numberOfMotorVehicleStrikingNonMotorist?: number;
  county?: number;
  dayOfCrash?: number;
  monthOfCrash?: number;
  hourOfCrash?: number;
  minuteOfCrash?: number;
  landUse?: string;
  landUseName?: string;
  functionalSystem?: string;
  functionalSystemName?: string;
  firstHarmfulEvent?: number;
  firstHarmfulEventName?: string;
  mannerOfCollision?: number;
  mannerOfCollisionName?: string;
  schoolBusRelated?: string;
  vehicleMake?: number;
  vehicleMakeName?: string;
  makeModelCombined?: number;
  bodyType?: number;
  bodyTypeName?: string;
  vehicleTrailing?: string;
  specialUse?: number;
  specialUseName?: string;
  emergencyMotorVehicleUse?: string;
  rollover?: string;
  initialContactPoint?: number;
  initialContactPointName?: string;
  fireOccurrence?: string;
  age?: number;
  sex?: string;
  personType?: number;
  personTypeName?: string;
  injurySeverity?: number;
  injurySeverityName?: string;
  seatingPosition?: number;
  seatingPositionName?: string;
  restraintSystemHelmetUse?: number;
  restraintSystemHelmetUseName?: string;
  indicationOfMisuseOfRestraintSystemHelmet?: string;
  airBagDeployed?: number;
  airBagDeployedName?: string;
  ejection?: number;
  ejectionName?: string;
  ejectionPath?: number;
  ejectionPathName?: string;
  extrication?: string;
  policeReportedAlcoholInvolvement?: string;
  methodOfAlcoholDeterminationByPolice?: string;
  alcoholTestStatus1?: string;
  alcoholTestStatus2?: string;
  alcoholTestStatus3?: string;
  alcoholTestStatus3Name?: string;
  policeReportedDrugInvolvement?: string;
  methodOfDrugDeterminationByPolice?: string;
  drugTestStatus?: string;
  drugTestType1?: string;
  drugTestType2?: string;
  drugTestType3?: string;
  drugTestType4?: number;
  drugTestType4Name?: string;
  drugTestType5?: number;
  drugTestType5Name?: string;
  drugTestType6?: number;
  drugTestType6Name?: string;
  transportedToFirstTreatmentFacility?: number;
  transportedToFirstTreatmentFacilityName?: string;
  diedAtSceneEnRoute?: string;
  dayOfDeath?: number;
  monthOfDeath?: number;
  yearOfDeath?: number;
  hourOfDeath?: number;
  minuteOfDeath?: number;
  deathTime?: number;
  lagHours?: number;
  lagMinutes?: number;
  relatedFactorsPersonLevel1?: number;
  relatedFactorsPersonLevel2?: number;
  relatedFactorsPersonLevel3?: number;
  fatalInjuryAtWork?: string;
  hispanicOrigin?: number;
  hispanicOriginName?: string;
  race?: number;
  raceName?: string;
  nonMotoristLocationAtTimeOfCrash?: number;
  nonMotoristLocationAtTimeOfCrashName?: string;
  timestampOfCrash?: Date;
}
