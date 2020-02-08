/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDamage } from "../database/Damage";
import { IDamageModel } from "../IDamageModel";
import { IModelConverter } from "./IModelConverter";

export class DamageConverter implements IModelConverter<IDamageModel, IDamage> {
  public convertToFrontend = (data: IDamage): IDamageModel => {
    return {
      damagedAreas: data.damagedAreas,
      damagedAreasName: data.damagedAreasName,
    };
  }

  public convertToBackend = (
    model: IDamageModel,
    existing?: IDamage | undefined,
    modifier?: string): IDamage => {

    throw new Error("Unsupported Write: IDamage");
  }
}

export const damageConverter = new DamageConverter();
