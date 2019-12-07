import { IDriverImpair } from "../database/DriverImpair";
import { IDriverImpairModel } from "../IDriverImpairModel";
import { IModelConverter } from "./modelConverter";

export class DriverImpairConverter implements IModelConverter<IDriverImpairModel, IDriverImpair> {
  public convertToFrontend = (data: IDriverImpair): IDriverImpairModel => {
    return {
      conditionImpairmentAtTimeOfCrashDriver: data.conditionImpairmentAtTimeOfCrashDriver,
      conditionImpairmentAtTimeOfCrashDriverName: data.conditionImpairmentAtTimeOfCrashDriverName,
    };
  }

  public convertToBackend = (
    model: IDriverImpairModel,
    existing?: IDriverImpair | undefined,
    modifier?: string): IDriverImpair => {

    throw new Error("Unsupported Write: IDriverImpair");
  }
}

export const driverImpairConverter = new DriverImpairConverter();
