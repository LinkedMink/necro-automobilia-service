import { IVehicleEvent } from "../database/VehicleEvent";
import { IVehicleEventModel } from "../IVehicleEventModel";
import { IModelConverter } from "./modelConverter";

export class VehicleEventConverter implements IModelConverter<IVehicleEventModel, IVehicleEvent> {
  public convertToFrontend = (data: IVehicleEvent): IVehicleEventModel => {
    return {
      eventNumber: data.eventNumber,
      vehicleNumber: data.vehicleNumber,
      vehicleEventNumber: data.vehicleEventNumber,
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
    model: IVehicleEventModel,
    existing?: IVehicleEvent | undefined,
    modifier?: string): IVehicleEvent => {

    throw new Error("Unsupported Write: IVehicleEvent");
  }
}

export const vehicleEventConverter = new VehicleEventConverter();
