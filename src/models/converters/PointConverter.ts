/* eslint-disable @typescript-eslint/no-unused-vars */
import { IPoint } from "../database/Point";
import { IPointModel } from "../IPointModel";
import { IModelConverter } from "./IModelConverter";

export class PointConverter implements IModelConverter<IPointModel, IPoint> {
  public convertToFrontend = (data: IPoint): IPointModel => {
    return {
      type: data.type,
      coordinates: data.coordinates,
    };
  }

  public convertToBackend = (
    model: IPointModel,
    existing?: IPoint | undefined,
    modifier?: string): IPoint => {
    return {
      type: model.type,
      coordinates: model.coordinates,
    } as IPoint;
  }
}

export const pointConverter = new PointConverter();
