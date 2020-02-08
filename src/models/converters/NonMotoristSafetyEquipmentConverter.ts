/* eslint-disable @typescript-eslint/no-unused-vars */
import { INonMotoristSafetyEquipment } from "../database/NonMotoristSafetyEquipment";
import { INonMotoristSafetyEquipmentModel } from "../INonMotoristSafetyEquipmentModel";
import { IModelConverter } from "./IModelConverter";

export class NonMotoristSafetyEquipmentConverter
  implements IModelConverter<INonMotoristSafetyEquipmentModel, INonMotoristSafetyEquipment> {
  public convertToFrontend = (data: INonMotoristSafetyEquipment): INonMotoristSafetyEquipmentModel => {
    return {
      vehicleNumber: data.vehicleNumber,
      personNumber: data.personNumber,
      nonMotoristSafetyEquipmentUse: data.nonMotoristSafetyEquipmentUse,
    };
  }

  public convertToBackend = (
    model: INonMotoristSafetyEquipmentModel,
    existing?: INonMotoristSafetyEquipment | undefined,
    modifier?: string): INonMotoristSafetyEquipment => {

    throw new Error("Unsupported Write: INonMotoristSafetyEquipment");
  }
}

export const nonMotoristSafetyEquipmentConverter = new NonMotoristSafetyEquipmentConverter();
