import { IFactor } from "../database/Factor";
import { IFactorModel } from "../IFactorModel";
import { IModelConverter } from "./IModelConverter";

export class FactorConverter implements IModelConverter<IFactorModel, IFactor> {
  public convertToFrontend = (data: IFactor): IFactorModel => {
    return {
      contributingCircumstancesMotorVehicle: data.contributingCircumstancesMotorVehicle,
      contributingCircumstancesMotorVehicleName: data.contributingCircumstancesMotorVehicleName,
    };
  }

  public convertToBackend = (
    model: IFactorModel,
    existing?: IFactor | undefined,
    modifier?: string): IFactor => {

    throw new Error("Unsupported Write: IFactor");
  }
}

export const factorConverter = new FactorConverter();
