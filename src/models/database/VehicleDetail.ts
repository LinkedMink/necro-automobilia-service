import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  vehicleMake: { type: SchemaTypes.String },
  marketingYear: { type: SchemaTypes.Number },
  vehicleTypeCode: { type: SchemaTypes.String },
  vehicleType: { type: SchemaTypes.String },
  makeName: { type: SchemaTypes.String },
  modelCode: { type: SchemaTypes.String },
  vehicleTrim: { type: SchemaTypes.String },
  vehicleTrim1: { type: SchemaTypes.String },
  vehicleTrim2: { type: SchemaTypes.String },
  vehicleTrim3: { type: SchemaTypes.String },
  vehicleTrim4: { type: SchemaTypes.String },
  bodyStyleCode: { type: SchemaTypes.String },
  bodyStyle: { type: SchemaTypes.String },
  numOfDoors: { type: SchemaTypes.Number },
  numberOfWheels: { type: SchemaTypes.Number },
  numOfWheelsByPowerTrain: { type: SchemaTypes.Number },
  vehicleManufacturerCode: { type: SchemaTypes.String },
  vehicleManufacturerName: { type: SchemaTypes.String },
  displacementCid: { type: SchemaTypes.Number },
  displacementCc: { type: SchemaTypes.Number },
  cylinderCountCode: { type: SchemaTypes.String },
  cycleCount: { type: SchemaTypes.Number },
  fuelCode: { type: SchemaTypes.String },
  fuel: { type: SchemaTypes.String },
  typeOfFuelCode: { type: SchemaTypes.String },
  typeOfFuel: { type: SchemaTypes.String },
  carburetionTypesCode: { type: SchemaTypes.String },
  carburetionTypes: { type: SchemaTypes.String },
  numOfBarrels: { type: SchemaTypes.String },
  grossVehicleWeightsRangeCode: { type: SchemaTypes.Number },
  grossVehicleWeightsRange: { type: SchemaTypes.String },
  distanceBetweenAxlesForBaseModel: { type: SchemaTypes.Number },
  distanceBetweenAxlesForParticularSeries: { type: SchemaTypes.String },
  frontTire: { type: SchemaTypes.Number },
  frontTirePressure: { type: SchemaTypes.Number },
  frontTireSizeCode: { type: SchemaTypes.String },
  frontTireSize: { type: SchemaTypes.String },
  rearTire: { type: SchemaTypes.Number },
  rearTirePressure: { type: SchemaTypes.Number },
  rearTireSizeCode: { type: SchemaTypes.String },
  rearTireSize: { type: SchemaTypes.String },
  tonnageRating: { type: SchemaTypes.String },
  shippingWeight: { type: SchemaTypes.Number },
  basePrice: { type: SchemaTypes.String },
  driveType1: { type: SchemaTypes.String },
  driveType2: { type: SchemaTypes.String },
  countrySoldCode: { type: SchemaTypes.String },
  countrySold: { type: SchemaTypes.String },
  brakesAbsCode: { type: SchemaTypes.String },
  brakesAbsDescription: { type: SchemaTypes.String },
  securityTypeCode: { type: SchemaTypes.String },
  securityType: { type: SchemaTypes.String },
  daytimeRunningLights1: { type: SchemaTypes.String },
  daytimeRunningLights2: { type: SchemaTypes.String },
  restraintTypeCode: { type: SchemaTypes.String },
  restraintType: { type: SchemaTypes.String },
  cabConfigurationCode: { type: SchemaTypes.String },
  cabConfiguration: { type: SchemaTypes.String },
  axleTypeFrontAxleCode: { type: SchemaTypes.String },
  axleTypeFrontAxle: { type: SchemaTypes.String },
  axleTypeRearAxleCode: { type: SchemaTypes.String },
  axleTypeRearAxle: { type: SchemaTypes.String },
  brakeTypeCode: { type: SchemaTypes.String },
  brakeType: { type: SchemaTypes.String },
  engineManufactureCode: { type: SchemaTypes.String },
  engineManufacture: { type: SchemaTypes.String },
  engineModel: { type: SchemaTypes.String },
  dutyTypeCode: { type: SchemaTypes.String },
  dutyType: { type: SchemaTypes.String },
  bedLengthCode: { type: SchemaTypes.String },
  bedLength: { type: SchemaTypes.String },
  standardSegmentationCode: { type: SchemaTypes.String },
  standardSegmentation: { type: SchemaTypes.String },
  plantCode: { type: SchemaTypes.String },
  plantCountry: { type: SchemaTypes.String },
  plantCity: { type: SchemaTypes.String },
  plantCountryCode: { type: SchemaTypes.String },
  plantStateCode: { type: SchemaTypes.String },
  plantState: { type: SchemaTypes.String },
  originCode: { type: SchemaTypes.String },
  origin: { type: SchemaTypes.String },
  displacementLiters: { type: SchemaTypes.Number },
  blockType: { type: SchemaTypes.String },
  headConfiguration1: { type: SchemaTypes.String },
  headConfiguration2: { type: SchemaTypes.String },
  valvesPerCylinder: { type: SchemaTypes.Number },
  valvesTotal: { type: SchemaTypes.Number },
  engineCode: { type: SchemaTypes.String },
  isIncomplete: { type: SchemaTypes.String },
  batteryTypeCode: { type: SchemaTypes.String },
  batteryType: { type: SchemaTypes.String },
  totalBatteryPower: { type: SchemaTypes.String },
  batteryVoltage: { type: SchemaTypes.String },
  superchargeFlag: { type: SchemaTypes.String },
  superchargeFlagDescription: { type: SchemaTypes.String },
  turbochargerFlag: { type: SchemaTypes.String },
  turbochargerFlagDescription: { type: SchemaTypes.String },
  variableValveTimingFlag: { type: SchemaTypes.String },
  motorcyclesBodyStyleCode: { type: SchemaTypes.String },
  motorcyclesBodyStyle: { type: SchemaTypes.String },
};

export const vehicleDetailSchema = new Schema(schemaDefinition);

export interface IVehicleDetail extends Types.Subdocument {
  vehicleNumber?: number;
  vehicleMake?: string;
  marketingYear?: number;
  vehicleTypeCode?: string;
  vehicleType?: string;
  makeName?: string;
  modelCode?: string;
  vehicleTrim?: string;
  vehicleTrim1?: string;
  vehicleTrim2?: string;
  vehicleTrim3?: string;
  vehicleTrim4?: string;
  bodyStyleCode?: string;
  bodyStyle?: string;
  numOfDoors?: number;
  numberOfWheels?: number;
  numOfWheelsByPowerTrain?: number;
  vehicleManufacturerCode?: string;
  vehicleManufacturerName?: string;
  displacementCid?: number;
  displacementCc?: number;
  cylinderCountCode?: string;
  cycleCount?: number;
  fuelCode?: string;
  fuel?: string;
  typeOfFuelCode?: string;
  typeOfFuel?: string;
  carburetionTypesCode?: string;
  carburetionTypes?: string;
  numOfBarrels?: string;
  grossVehicleWeightsRangeCode?: number;
  grossVehicleWeightsRange?: string;
  distanceBetweenAxlesForBaseModel?: number;
  distanceBetweenAxlesForParticularSeries?: string;
  frontTire?: number;
  frontTirePressure?: number;
  frontTireSizeCode?: string;
  frontTireSize?: string;
  rearTire?: number;
  rearTirePressure?: number;
  rearTireSizeCode?: string;
  rearTireSize?: string;
  tonnageRating?: string;
  shippingWeight?: number;
  basePrice?: string;
  driveType1?: string;
  driveType2?: string;
  countrySoldCode?: string;
  countrySold?: string;
  brakesAbsCode?: string;
  brakesAbsDescription?: string;
  securityTypeCode?: string;
  securityType?: string;
  daytimeRunningLights1?: string;
  daytimeRunningLights2?: string;
  restraintTypeCode?: string;
  restraintType?: string;
  cabConfigurationCode?: string;
  cabConfiguration?: string;
  axleTypeFrontAxleCode?: string;
  axleTypeFrontAxle?: string;
  axleTypeRearAxleCode?: string;
  axleTypeRearAxle?: string;
  brakeTypeCode?: string;
  brakeType?: string;
  engineManufactureCode?: string;
  engineManufacture?: string;
  engineModel?: string;
  dutyTypeCode?: string;
  dutyType?: string;
  bedLengthCode?: string;
  bedLength?: string;
  standardSegmentationCode?: string;
  standardSegmentation?: string;
  plantCode?: string;
  plantCountry?: string;
  plantCity?: string;
  plantCountryCode?: string;
  plantStateCode?: string;
  plantState?: string;
  originCode?: string;
  origin?: string;
  displacementLiters?: number;
  blockType?: string;
  headConfiguration1?: string;
  headConfiguration2?: string;
  valvesPerCylinder?: number;
  valvesTotal?: number;
  engineCode?: string;
  isIncomplete?: string;
  batteryTypeCode?: string;
  batteryType?: string;
  totalBatteryPower?: string;
  batteryVoltage?: string;
  superchargeFlag?: string;
  superchargeFlagDescription?: string;
  turbochargerFlag?: string;
  turbochargerFlagDescription?: string;
  variableValveTimingFlag?: string;
  motorcyclesBodyStyleCode?: string;
  motorcyclesBodyStyle?: string;
}
