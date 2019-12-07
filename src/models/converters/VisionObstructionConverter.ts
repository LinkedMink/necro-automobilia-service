import { IVisionObstruction } from "../database/VisionObstruction";
import { IVisionObstructionModel } from "../IVisionObstructionModel";
import { IModelConverter } from "./modelConverter";

export class VisionObstructionConverter implements IModelConverter<IVisionObstructionModel, IVisionObstruction> {
  public convertToFrontend = (data: IVisionObstruction): IVisionObstructionModel => {
    return {
      driversVisionObscuredBy: data.driversVisionObscuredBy,
      driversVisionObscuredByName: data.driversVisionObscuredByName,
    };
  }

  public convertToBackend = (
    model: IVisionObstructionModel,
    existing?: IVisionObstruction | undefined,
    modifier?: string): IVisionObstruction => {

    throw new Error("Unsupported Write: IVisionObstruction");
  }
}

export const visionObstructionConverter = new VisionObstructionConverter();
