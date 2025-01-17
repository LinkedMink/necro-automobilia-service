/* eslint-disable @typescript-eslint/no-unused-vars */
import { IAccident } from "../database/Accident";
import { IAccidentModel } from "../IAccidentModel";
import { crashEventConverter } from "./CrashEventConverter";
import { IModelConverter } from "./IModelConverter";
import { nonMotoristCrashConverter } from "./NonMotoristCrashConverter";
import { nonMotoristImpairConverter } from "./NonMotoristImpairConverter";
import { nonMotoristPriorConverter } from "./NonMotoristPriorConverter";
import { nonMotoristSafetyEquipmentConverter } from "./NonMotoristSafetyEquipmentConverter";
import { parkWorkVehicleConverter } from "./ParkWorkVehicleConverter";
import { pedestrianBicycleConverter } from "./PedestrianBicycleConverter";
import { personConverter } from "./PersonConverter";
import { pointConverter } from "./PointConverter";
import { vehicleCrashConverter } from "./VehicleCrashConverter";
import { vehicleDetailConverter } from "./VehicleDetailConverter";
import { vehicleEventConverter } from "./VehicleEventConverter";

export class AccidentConverter implements IModelConverter<IAccidentModel, IAccident> {
  public convertToFrontend = (data: IAccident): IAccidentModel => {
    const accident: IAccidentModel = {
      id: data.id,
      consecutiveNumber: data.consecutiveNumber,
      stateNumber: data.stateNumber,
      stateName: data.stateName,
      numberOfVehicleFormsSubmittedAll: data.numberOfVehicleFormsSubmittedAll,
      numberOfMotorVehiclesInTransportMvit: data.numberOfMotorVehiclesInTransportMvit,
      numberOfParkedWorkingVehicles: data.numberOfParkedWorkingVehicles,
      numberOfFormsSubmittedForPersonsNotInMotorVehicles:
        data.numberOfFormsSubmittedForPersonsNotInMotorVehicles,
      numberOfPersonsNotInMotorVehiclesInTransportMvit:
        data.numberOfPersonsNotInMotorVehiclesInTransportMvit,
      numberOfPersonsInMotorVehiclesInTransportMvit:
        data.numberOfPersonsInMotorVehiclesInTransportMvit,
      numberOfFormsSubmittedForPersonsInMotorVehicles:
        data.numberOfFormsSubmittedForPersonsInMotorVehicles,
      county: data.county,
      city: data.city,
      dayOfCrash: data.dayOfCrash,
      monthOfCrash: data.monthOfCrash,
      yearOfCrash: data.yearOfCrash,
      dayOfWeek: data.dayOfWeek,
      hourOfCrash: data.hourOfCrash,
      minuteOfCrash: data.minuteOfCrash,
      nationalHighwaySystem: data.nationalHighwaySystem,
      landUse: data.landUse,
      landUseName: data.landUseName,
      functionalSystem: data.functionalSystem,
      functionalSystemName: data.functionalSystemName,
      ownership: data.ownership,
      ownershipName: data.ownershipName,
      routeSigning: data.routeSigning,
      routeSigningName: data.routeSigningName,
      trafficwayIdentifier: data.trafficwayIdentifier,
      trafficwayIdentifier2: data.trafficwayIdentifier2,
      milepoint: data.milepoint,
      location: data.location ? pointConverter.convertToFrontend(data.location) : undefined,
      specialJurisdiction: data.specialJurisdiction,
      specialJurisdictionName: data.specialJurisdictionName,
      firstHarmfulEvent: data.firstHarmfulEvent,
      firstHarmfulEventName: data.firstHarmfulEventName,
      mannerOfCollision: data.mannerOfCollision,
      mannerOfCollisionName: data.mannerOfCollisionName,
      relationToJunctionWithinInterchangeArea: data.relationToJunctionWithinInterchangeArea,
      relationToJunctionSpecificLocation: data.relationToJunctionSpecificLocation,
      relationToJunctionSpecificLocationName: data.relationToJunctionSpecificLocationName,
      typeOfIntersection: data.typeOfIntersection,
      workZone: data.workZone,
      relationToTrafficway: data.relationToTrafficway,
      relationToTrafficwayName: data.relationToTrafficwayName,
      lightCondition: data.lightCondition,
      lightConditionName: data.lightConditionName,
      atmosphericConditions1: data.atmosphericConditions1,
      atmosphericConditions1Name: data.atmosphericConditions1Name,
      atmosphericConditions2: data.atmosphericConditions2,
      atmosphericConditions2Name: data.atmosphericConditions2Name,
      atmosphericConditions: data.atmosphericConditions,
      atmosphericConditionsName: data.atmosphericConditionsName,
      schoolBusRelated: data.schoolBusRelated,
      railGradeCrossingIdentifier: data.railGradeCrossingIdentifier,
      hourOfNotification: data.hourOfNotification,
      minuteOfNotification: data.minuteOfNotification,
      hourOfArrivalAtScene: data.hourOfArrivalAtScene,
      minuteOfArrivalAtScene: data.minuteOfArrivalAtScene,
      hourOfEmsArrivalAtHospital: data.hourOfEmsArrivalAtHospital,
      minuteOfEmsArrivalAtHospital: data.minuteOfEmsArrivalAtHospital,
      relatedFactorsCrashLevel1: data.relatedFactorsCrashLevel1,
      relatedFactorsCrashLevel1Name: data.relatedFactorsCrashLevel1Name,
      relatedFactorsCrashLevel2: data.relatedFactorsCrashLevel2,
      relatedFactorsCrashLevel2Name: data.relatedFactorsCrashLevel2Name,
      relatedFactorsCrashLevel3: data.relatedFactorsCrashLevel3,
      relatedFactorsCrashLevel3Name: data.relatedFactorsCrashLevel3Name,
      numberOfFatalities: data.numberOfFatalities,
      numberOfDrunkDrivers: data.numberOfDrunkDrivers,
      timestampOfCrash: data.timestampOfCrash,

      crashEvents: [],
      nonMotoristsCrash: [],
      nonMotoristsImpair: [],
      nonMotoristsPrior: [],
      nonMotoristsSafetyEquipment: [],
      parkWorkVehicles: [],
      pedestrianBicycles: [],
      persons: [],
      vehicleCrashs: [],
      vehicleDetails: [],
      vehicleEvents: [],
    };

    data.crashEvents.forEach(
      (e) => accident.crashEvents.push(crashEventConverter.convertToFrontend(e)));
    data.nonMotoristsCrash.forEach(
      (e) => accident.nonMotoristsCrash.push(nonMotoristCrashConverter.convertToFrontend(e)));
    data.nonMotoristsImpair.forEach(
      (e) => accident.nonMotoristsImpair.push(nonMotoristImpairConverter.convertToFrontend(e)));
    data.nonMotoristsPrior.forEach(
      (e) => accident.nonMotoristsPrior.push(nonMotoristPriorConverter.convertToFrontend(e)));
    data.nonMotoristsSafetyEquipment.forEach(
      (e) => accident.nonMotoristsSafetyEquipment.push(nonMotoristSafetyEquipmentConverter.convertToFrontend(e)));
    data.parkWorkVehicles.forEach(
      (e) => accident.parkWorkVehicles.push(parkWorkVehicleConverter.convertToFrontend(e)));
    data.pedestrianBicycles.forEach(
      (e) => accident.pedestrianBicycles.push(pedestrianBicycleConverter.convertToFrontend(e)));
    data.persons.forEach(
      (e) => accident.persons.push(personConverter.convertToFrontend(e))),
    data.vehicleCrashs.forEach(
      (e) => accident.vehicleCrashs.push(vehicleCrashConverter.convertToFrontend(e)));
    data.vehicleDetails.forEach(
      (e) => accident.vehicleDetails.push(vehicleDetailConverter.convertToFrontend(e)));
    data.vehicleEvents.forEach(
      (e) => accident.vehicleEvents.push(vehicleEventConverter.convertToFrontend(e)));

    return accident;
  }

  public convertToBackend = (
    model: IAccidentModel,
    existing?: IAccident | undefined,
    modifier?: string): IAccident => {

    throw new Error("Unsupported Write: IAccidentModel");
  }
}

export const accidentConverter = new AccidentConverter();
