import { IManeuver } from "../database/Maneuver";
import { IManeuverModel } from "../IManeuverModel";
import { IModelConverter } from "./modelConverter";

export class ManeuverConverter implements IModelConverter<IManeuverModel, IManeuver> {
  public convertToFrontend = (data: IManeuver): IManeuverModel => {
    return {
      driverManeuveredToAvoid: data.driverManeuveredToAvoid,
      driverManeuveredToAvoidName: data.driverManeuveredToAvoidName,
    };
  }

  public convertToBackend = (
    model: IManeuverModel,
    existing?: IManeuver | undefined,
    modifier?: string): IManeuver => {

    throw new Error("Unsupported Write: IManeuver");
  }
}

export const maneuverConverter = new ManeuverConverter();
