import { ShareEventType } from "./database/ShareEvent";
import { ITrackedEntityModel } from "./ITrackedEntityModel";

export interface IShareEventModel extends ITrackedEntityModel {
  userId: string;
  accessKey: string;
  expireDate: Date;
  type: ShareEventType;
  sharedBy: string;
  sharedWith: string[];
  data: unknown;
}
