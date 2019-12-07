import { IViolation } from "../database/Violation";
import { IViolationModel } from "../IViolationModel";
import { IModelConverter } from "./IModelConverter";

export class ViolationConverter implements IModelConverter<IViolationModel, IViolation> {
  public convertToFrontend = (data: IViolation): IViolationModel => {
    return {
      violationsCharged: data.violationsCharged,
      violationsChargedName: data.violationsChargedName,
    };
  }

  public convertToBackend = (
    model: IViolationModel,
    existing?: IViolation | undefined,
    modifier?: string): IViolation => {

    throw new Error("Unsupported Write: IViolation");
  }
}

export const violationConverter = new ViolationConverter();
