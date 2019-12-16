import { ITrackedEntityModel } from "./ITrackedEntityModel";

export interface IFeedEventModel extends ITrackedEntityModel {
  title: string;
  releaseDate: Date;
}
