import { INonMotoristPrior } from "../database/NonMotoristPrior";
import { INonMotoristPriorModel } from "../INonMotoristPriorModel";
import { IModelConverter } from "./modelConverter";

export class NonMotoristPriorConverter implements IModelConverter<INonMotoristPriorModel, INonMotoristPrior> {
  public convertToFrontend = (data: INonMotoristPrior): INonMotoristPriorModel => {
    return {
      vehicleNumber: data.vehicleNumber,
      personNumber: data.personNumber,
      nonMotoristActionCircumstances: data.nonMotoristActionCircumstances,
      nonMotoristActionCircumstancesName: data.nonMotoristActionCircumstancesName,
    };
  }

  public convertToBackend = (
    model: INonMotoristPriorModel,
    existing?: INonMotoristPrior | undefined,
    modifier?: string): INonMotoristPrior => {

    throw new Error("Unsupported Write: INonMotoristPrior");
  }
}

export const nonMotoristPriorConverter = new NonMotoristPriorConverter();
