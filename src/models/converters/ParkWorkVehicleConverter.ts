/* eslint-disable @typescript-eslint/no-unused-vars */
import { IParkWorkVehicle } from "../database/ParkWorkVehicle";
import { IParkWorkVehicleModel } from "../IParkWorkVehicleModel";
import { IModelConverter } from "./IModelConverter";

export class ParkWorkVehicleConverter implements IModelConverter<IParkWorkVehicleModel, IParkWorkVehicle> {
  public convertToFrontend = (data: IParkWorkVehicle): IParkWorkVehicleModel => {
    return {
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
      mannerOfCollisionName: data.mannerOfCollisionName,
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
      mcidIssuingAuthority: data.mcidIssuingAuthority,
      mcidIssuingAuthorityName: data.mcidIssuingAuthorityName,
      mcidIdentificationNumber: data.mcidIdentificationNumber,
      motorCarrierIdentificationNumber: data.motorCarrierIdentificationNumber,
      grossVehicleWeightRating: data.grossVehicleWeightRating,
      vehicleConfiguration: data.vehicleConfiguration,
      cargoBodyType: data.cargoBodyType,
      hazardousMaterialInvolvement: data.hazardousMaterialInvolvement,
      hazardousMaterialPlacard: data.hazardousMaterialPlacard,
      hazardousMaterialIdentificationNumber: data.hazardousMaterialIdentificationNumber,
      hazardousMaterialClassNumber: data.hazardousMaterialClassNumber,
      releaseOfHazardousMaterialFromTheCargoCompartment: data.releaseOfHazardousMaterialFromTheCargoCompartment,
      busUse: data.busUse,
      specialUse: data.specialUse,
      specialUseName: data.specialUseName,
      emergencyMotorVehicleUse: data.emergencyMotorVehicleUse,
      underrideOverride: data.underrideOverride,
      underrideOverrideName: data.underrideOverrideName,
      initialContactPoint: data.initialContactPoint,
      extentOfDamage: data.extentOfDamage,
      vehicleRemoval: data.vehicleRemoval,
      mostHarmfulEvent: data.mostHarmfulEvent,
      relatedFactorsVehicleLevel1: data.relatedFactorsVehicleLevel1,
      relatedFactorsVehicleLevel2: data.relatedFactorsVehicleLevel2,
      fireOccurrence: data.fireOccurrence,
      fatalitiesInVehicle: data.fatalitiesInVehicle,
    };
  }

  public convertToBackend = (
    model: IParkWorkVehicleModel,
    existing?: IParkWorkVehicle | undefined,
    modifier?: string): IParkWorkVehicle => {

    throw new Error("Unsupported Write: IParkWorkVehicle");
  }
}

export const parkWorkVehicleConverter = new ParkWorkVehicleConverter();
