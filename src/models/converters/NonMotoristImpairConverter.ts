/* eslint-disable @typescript-eslint/no-unused-vars */
import { INonMotoristImpair } from "../database/NonMotoristImpair";
import { INonMotoristImpairModel } from "../INonMotoristImpairModel";
import { IModelConverter } from "./IModelConverter";

export class NonMotoristImpairConverter implements IModelConverter<INonMotoristImpairModel, INonMotoristImpair> {
  public convertToFrontend = (data: INonMotoristImpair): INonMotoristImpairModel => {
    return {
      vehicleNumber: data.vehicleNumber,
      personNumber: data.personNumber,
      conditionImpairmentAtTimeOfCrashNonMotorist: data.conditionImpairmentAtTimeOfCrashNonMotorist,
      conditionImpairmentAtTimeOfCrashNonMotoristName: data.conditionImpairmentAtTimeOfCrashNonMotoristName,
    };
  }

  public convertToBackend = (
    model: INonMotoristImpairModel,
    existing?: INonMotoristImpair | undefined,
    modifier?: string): INonMotoristImpair => {

    throw new Error("Unsupported Write: INonMotoristImpair");
  }
}

export const nonMotoristImpairConverter = new NonMotoristImpairConverter();
