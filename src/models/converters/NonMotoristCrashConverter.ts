/* eslint-disable @typescript-eslint/no-unused-vars */
import { INonMotoristCrash } from "../database/NonMotoristCrash";
import { INonMotoristCrashModel } from "../INonMotoristCrashModel";
import { IModelConverter } from "./IModelConverter";

export class NonMotoristCrashConverter implements IModelConverter<INonMotoristCrashModel, INonMotoristCrash> {
  public convertToFrontend = (data: INonMotoristCrash): INonMotoristCrashModel => {
    return {
      vehicleNumber: data.vehicleNumber,
      personNumber: data.personNumber,
      nonMotoristContributingCircumstances: data.nonMotoristContributingCircumstances,
      nonMotoristContributingCircumstancesName: data.nonMotoristContributingCircumstancesName,
    };
  }

  public convertToBackend = (
    model: INonMotoristCrashModel,
    existing?: INonMotoristCrash | undefined,
    modifier?: string): INonMotoristCrash => {

    throw new Error("Unsupported Write: INonMotoristCrash");
  }
}

export const nonMotoristCrashConverter = new NonMotoristCrashConverter();
