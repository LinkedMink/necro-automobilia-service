/* eslint-disable @typescript-eslint/no-unused-vars */
import { IVehicleCrash } from "../database/VehicleCrash";
import { IVehicleCrashModel } from "../IVehicleCrashModel";
import { damageConverter } from "./DamageConverter";
import { distractionConverter } from "./DistractionConverter";
import { driverImpairConverter } from "./DriverImpairConverter";
import { factorConverter } from "./FactorConverter";
import { IModelConverter } from "./IModelConverter";
import { maneuverConverter } from "./ManeuverConverter";
import { violationConverter } from "./ViolationConverter";
import { visionObstructionConverter } from "./VisionObstructionConverter";

export class VehicleCrashConverter implements IModelConverter<IVehicleCrashModel, IVehicleCrash> {
  public convertToFrontend = (data: IVehicleCrash): IVehicleCrashModel => {
    const vehicleCrash: IVehicleCrashModel = {
      vehicleNumber: data.vehicleNumber,
      numberOfMotorVehiclesInTransportMvit: data.numberOfMotorVehiclesInTransportMvit,
      numberOfOccupants: data.numberOfOccupants,
      dayOfCrash: data.dayOfCrash,
      monthOfCrash: data.monthOfCrash,
      hourOfCrash: data.hourOfCrash,
      minuteOfCrash: data.minuteOfCrash,
      firstHarmfulEvent: data.firstHarmfulEvent,
      firstHarmfulEventName: data.firstHarmfulEventName,
      mannerOfCollision: data.mannerOfCollision,
      unitType: data.unitType,
      hitAndRun: data.hitAndRun,
      registrationState: data.registrationState,
      registrationStateName: data.registrationStateName,
      registeredVehicleOwner: data.registeredVehicleOwner,
      registeredVehicleOwnerName: data.registeredVehicleOwnerName,
      vehicleMake: data.vehicleMake,
      vehicleMakeName: data.vehicleMakeName,
      vehicleModel: data.vehicleModel,
      makeModelCombined: data.makeModelCombined,
      bodyType: data.bodyType,
      bodyTypeName: data.bodyTypeName,
      vehicleModelYear: data.vehicleModelYear,
      vehicleIdentificationNumberVin: data.vehicleIdentificationNumberVin,
      vehicleTrailing: data.vehicleTrailing,
      jackknife: data.jackknife,
      mcidIssuingAuthority: data.mcidIssuingAuthority,
      mcidIdentificationNumber: data.mcidIdentificationNumber,
      motorCarrierIdentificationNumberMcid: data.motorCarrierIdentificationNumberMcid,
      grossVehicleWeightRating: data.grossVehicleWeightRating,
      vehicleConfiguration: data.vehicleConfiguration,
      vehicleConfigurationName: data.vehicleConfigurationName,
      cargoBodyType: data.cargoBodyType,
      cargoBodyTypeName: data.cargoBodyTypeName,
      hazardousMaterialInvolvement: data.hazardousMaterialInvolvement,
      hazardousMaterialPlacard: data.hazardousMaterialPlacard,
      hazardousMaterialIdentificationNumber: data.hazardousMaterialIdentificationNumber,
      hazardousMaterialClassNumber: data.hazardousMaterialClassNumber,
      releaseOfHazardousMaterialFromTheCargoCompartment: data.releaseOfHazardousMaterialFromTheCargoCompartment,
      busUse: data.busUse,
      specialUse: data.specialUse,
      specialUseName: data.specialUseName,
      emergencyMotorVehicleUse: data.emergencyMotorVehicleUse,
      travelSpeed: data.travelSpeed,
      underrideOverride: data.underrideOverride,
      rollover: data.rollover,
      locationOfRollover: data.locationOfRollover,
      initialContactPoint: data.initialContactPoint,
      extentOfDamage: data.extentOfDamage,
      vehicleRemoval: data.vehicleRemoval,
      mostHarmfulEvent: data.mostHarmfulEvent,
      relatedFactorsVehicleLevel1: data.relatedFactorsVehicleLevel1,
      relatedFactorsVehicleLevel2: data.relatedFactorsVehicleLevel2,
      fireOccurrence: data.fireOccurrence,
      driverPresence: data.driverPresence,
      driversLicenseState: data.driversLicenseState,
      driversZipCode: data.driversZipCode,
      nonCdlLicenseStatus: data.nonCdlLicenseStatus,
      nonCdlLicenseType: data.nonCdlLicenseType,
      commercialMotorVehicleLicenseStatus: data.commercialMotorVehicleLicenseStatus,
      complianceWithCdlEndorsements: data.complianceWithCdlEndorsements,
      licenseComplianceWithClassOfVehicle: data.licenseComplianceWithClassOfVehicle,
      complianceWithLicenseRestrictions: data.complianceWithLicenseRestrictions,
      driverHeight: data.driverHeight,
      driverWeight: data.driverWeight,
      previousRecordedCrashes: data.previousRecordedCrashes,
      previousRecordedSuspensionsAndRevocations: data.previousRecordedSuspensionsAndRevocations,
      previousDwiConvictions: data.previousDwiConvictions,
      previousSpeedingConvictions: data.previousSpeedingConvictions,
      previousOtherMovingViolationConvictions: data.previousOtherMovingViolationConvictions,
      monthOfFirstCrashSuspensionOrConviction: data.monthOfFirstCrashSuspensionOrConviction,
      yearOfFirstCrashSuspensionOrConviction: data.yearOfFirstCrashSuspensionOrConviction,
      monthOfLastCrashSuspensionOrConviction: data.monthOfLastCrashSuspensionOrConviction,
      yearOfLastCrashSuspensionOrConviction: data.yearOfLastCrashSuspensionOrConviction,
      speedingRelated: data.speedingRelated,
      relatedFactorsDriverLevel1: data.relatedFactorsDriverLevel1,
      relatedFactorsDriverLevel2: data.relatedFactorsDriverLevel2,
      relatedFactorsDriverLevel3: data.relatedFactorsDriverLevel3,
      relatedFactorsDriverLevel4: data.relatedFactorsDriverLevel4,
      trafficwayDescription: data.trafficwayDescription,
      totalLanesInRoadway: data.totalLanesInRoadway,
      speedLimit: data.speedLimit,
      roadwayAlignment: data.roadwayAlignment,
      roadwayGrade: data.roadwayGrade,
      roadwaySurfaceType: data.roadwaySurfaceType,
      roadwaySurfaceCondition: data.roadwaySurfaceCondition,
      roadwaySurfaceConditionName: data.roadwaySurfaceConditionName,
      trafficControlDevice: data.trafficControlDevice,
      trafficControlDeviceFunctioning: data.trafficControlDeviceFunctioning,
      preEventMovementPriorToRecognitionOfCriticalEvent: data.preEventMovementPriorToRecognitionOfCriticalEvent,
      criticalEventPrecrash: data.criticalEventPrecrash,
      criticalEventPrecrashName: data.criticalEventPrecrashName,
      attemptedAvoidanceManeuver: data.attemptedAvoidanceManeuver,
      attemptedAvoidanceManeuverName: data.attemptedAvoidanceManeuverName,
      preImpactStability: data.preImpactStability,
      preImpactLocation: data.preImpactLocation,
      crashType: data.crashType,
      crashTypeName: data.crashTypeName,
      fatalitiesInVehicle: data.fatalitiesInVehicle,
      driverDrinking: data.driverDrinking,
      timestampOfCrash: data.timestampOfCrash,

      damages: [],
      distractions: [],
      driversImpair: [],
      factors: [],
      maneuvers: [],
      violations: [],
      visionObstructions: [],
    };

    data.damages.forEach(
      (e) => vehicleCrash.damages.push(damageConverter.convertToFrontend(e)));
    data.distractions.forEach(
      (e) => vehicleCrash.distractions.push(distractionConverter.convertToFrontend(e)));
    data.driversImpair.forEach(
      (e) => vehicleCrash.driversImpair.push(driverImpairConverter.convertToFrontend(e)));
    data.factors.forEach(
      (e) => vehicleCrash.factors.push(factorConverter.convertToFrontend(e)));
    data.maneuvers.forEach(
      (e) => vehicleCrash.maneuvers.push(maneuverConverter.convertToFrontend(e)));
    data.violations.forEach(
      (e) => vehicleCrash.violations.push( violationConverter.convertToFrontend(e)));
    data.visionObstructions.forEach(
      (e) => vehicleCrash.visionObstructions.push(visionObstructionConverter.convertToFrontend(e)));

    return vehicleCrash;
  }

  public convertToBackend = (
    model: IVehicleCrashModel,
    existing?: IVehicleCrash | undefined,
    modifier?: string): IVehicleCrash => {

    throw new Error("Unsupported Write: IVehicleCrash");
  }
}

export const vehicleCrashConverter = new VehicleCrashConverter();
