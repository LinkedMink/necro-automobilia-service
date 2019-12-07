import { IDistraction } from "../database/Distraction";
import { IDistractionModel } from "../IDistractionModel";
import { IModelConverter } from "./modelConverter";

export class DistractionConverter implements IModelConverter<IDistractionModel, IDistraction> {
  public convertToFrontend = (data: IDistraction): IDistractionModel => {
    return {
      driverDistractedBy: data.driverDistractedBy,
      driverDistractedByName: data.driverDistractedByName,
    };
  }

  public convertToBackend = (
    model: IDistractionModel,
    existing?: IDistraction | undefined,
    modifier?: string): IDistraction => {

    throw new Error("Unsupported Write: IDistraction");
  }
}

export const distractionConverter = new DistractionConverter();
