import { IVehicleDetail } from "../database/VehicleDetail";
import { IVehicleDetailModel } from "../IVehicleDetailModel";
import { IModelConverter } from "./modelConverter";

export class VehicleDetailConverter implements IModelConverter<IVehicleDetailModel, IVehicleDetail> {
  public convertToFrontend = (data: IVehicleDetail): IVehicleDetailModel => {
    return {
      vehicleNumber: data.vehicleNumber,
      vehicleMake: data.vehicleMake,
      marketingYear: data.marketingYear,
      vehicleTypeCode: data.vehicleTypeCode,
      vehicleType: data.vehicleType,
      makeName: data.makeName,
      modelCode: data.modelCode,
      vehicleTrim: data.vehicleTrim,
      vehicleTrim1: data.vehicleTrim1,
      vehicleTrim2: data.vehicleTrim2,
      vehicleTrim3: data.vehicleTrim3,
      vehicleTrim4: data.vehicleTrim4,
      bodyStyleCode: data.bodyStyleCode,
      bodyStyle: data.bodyStyle,
      numOfDoors: data.numOfDoors,
      numberOfWheels: data.numberOfWheels,
      numOfWheelsByPowerTrain: data.numOfWheelsByPowerTrain,
      vehicleManufacturerCode: data.vehicleManufacturerCode,
      vehicleManufacturerName: data.vehicleManufacturerName,
      displacementCid: data.displacementCid,
      displacementCc: data.displacementCc,
      cylinderCountCode: data.cylinderCountCode,
      cycleCount: data.cycleCount,
      fuelCode: data.fuelCode,
      fuel: data.fuel,
      typeOfFuelCode: data.typeOfFuelCode,
      typeOfFuel: data.typeOfFuel,
      carburetionTypesCode: data.carburetionTypesCode,
      carburetionTypes: data.carburetionTypes,
      numOfBarrels: data.numOfBarrels,
      grossVehicleWeightsRangeCode: data.grossVehicleWeightsRangeCode,
      grossVehicleWeightsRange: data.grossVehicleWeightsRange,
      distanceBetweenAxlesForBaseModel: data.distanceBetweenAxlesForBaseModel,
      distanceBetweenAxlesForParticularSeries: data.distanceBetweenAxlesForParticularSeries,
      frontTire: data.frontTire,
      frontTirePressure: data.frontTirePressure,
      frontTireSizeCode: data.frontTireSizeCode,
      frontTireSize: data.frontTireSize,
      rearTire: data.rearTire,
      rearTirePressure: data.rearTirePressure,
      rearTireSizeCode: data.rearTireSizeCode,
      rearTireSize: data.rearTireSize,
      tonnageRating: data.tonnageRating,
      shippingWeight: data.shippingWeight,
      basePrice: data.basePrice,
      driveType1: data.driveType1,
      driveType2: data.driveType2,
      countrySoldCode: data.countrySoldCode,
      countrySold: data.countrySold,
      brakesAbsCode: data.brakesAbsCode,
      brakesAbsDescription: data.brakesAbsDescription,
      securityTypeCode: data.securityTypeCode,
      securityType: data.securityType,
      daytimeRunningLights1: data.daytimeRunningLights1,
      daytimeRunningLights2: data.daytimeRunningLights2,
      restraintTypeCode: data.restraintTypeCode,
      restraintType: data.restraintType,
      cabConfigurationCode: data.cabConfigurationCode,
      cabConfiguration: data.cabConfiguration,
      axleTypeFrontAxleCode: data.axleTypeFrontAxleCode,
      axleTypeFrontAxle: data.axleTypeFrontAxle,
      axleTypeRearAxleCode: data.axleTypeRearAxleCode,
      axleTypeRearAxle: data.axleTypeRearAxle,
      brakeTypeCode: data.brakeTypeCode,
      brakeType: data.brakeType,
      engineManufactureCode: data.engineManufactureCode,
      engineManufacture: data.engineManufacture,
      engineModel: data.engineModel,
      dutyTypeCode: data.dutyTypeCode,
      dutyType: data.dutyType,
      bedLengthCode: data.bedLengthCode,
      bedLength: data.bedLength,
      standardSegmentationCode: data.standardSegmentationCode,
      standardSegmentation: data.standardSegmentation,
      plantCode: data.plantCode,
      plantCountry: data.plantCountry,
      plantCity: data.plantCity,
      plantCountryCode: data.plantCountryCode,
      plantStateCode: data.plantStateCode,
      plantState: data.plantState,
      originCode: data.originCode,
      origin: data.origin,
      displacementLiters: data.displacementLiters,
      blockType: data.blockType,
      headConfiguration1: data.headConfiguration1,
      headConfiguration2: data.headConfiguration2,
      valvesPerCylinder: data.valvesPerCylinder,
      valvesTotal: data.valvesTotal,
      engineCode: data.engineCode,
      isIncomplete: data.isIncomplete,
      batteryTypeCode: data.batteryTypeCode,
      batteryType: data.batteryType,
      totalBatteryPower: data.totalBatteryPower,
      batteryVoltage: data.batteryVoltage,
      superchargeFlag: data.superchargeFlag,
      superchargeFlagDescription: data.superchargeFlagDescription,
      turbochargerFlag: data.turbochargerFlag,
      turbochargerFlagDescription: data.turbochargerFlagDescription,
      variableValveTimingFlag: data.variableValveTimingFlag,
      motorcyclesBodyStyleCode: data.motorcyclesBodyStyleCode,
      motorcyclesBodyStyle: data.motorcyclesBodyStyle,
    };
  }

  public convertToBackend = (
    model: IVehicleDetailModel,
    existing?: IVehicleDetail | undefined,
    modifier?: string): IVehicleDetail => {

    throw new Error("Unsupported Write: IVehicleDetail");
  }
}

export const vehicleDetailConverter = new VehicleDetailConverter();