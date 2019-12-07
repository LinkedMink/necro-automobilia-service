import { ICrashEvent } from "../database/CrashEvent";
import { ICrashEventModel } from "../ICrashEventModel";
import { IModelConverter } from "./modelConverter";

export class CrashEventConverter implements IModelConverter<ICrashEventModel, ICrashEvent> {
  public convertToFrontend = (data: ICrashEvent): ICrashEventModel => {
    return {
      eventNumber: data.eventNumber,
      vehicleNumberThisVehicle: data.vehicleNumberThisVehicle,
      areaOfImpactThisVehicle: data.areaOfImpactThisVehicle,
      areaOfImpactThisVehicleName: data.areaOfImpactThisVehicleName,
      sequenceOfEvents: data.sequenceOfEvents,
      sequenceOfEventsName: data.sequenceOfEventsName,
      vehicleNumberOtherVehicle: data.vehicleNumberOtherVehicle,
      areaOfImpactOtherVehicle: data.areaOfImpactOtherVehicle,
      areaOfImpactOtherVehicleName: data.areaOfImpactOtherVehicleName,
    };
  }

  public convertToBackend = (
    model: ICrashEventModel,
    existing?: ICrashEvent | undefined,
    modifier?: string): ICrashEvent => {

    throw new Error("Unsupported Write: ICrashEvent");
  }
}

export const crashEventConverter = new CrashEventConverter();
