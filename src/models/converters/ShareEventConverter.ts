import { ObjectId } from "mongodb";
import { Types } from "mongoose";

import { IShareEvent } from "../database/ShareEvent";
import { IShareEventModel } from "../IShareEventModel";
import { IModelConverter, mapTrackedEntity, setUserModifier } from "./IModelConverter";

export class ShareEventConverter implements IModelConverter<IShareEventModel, IShareEvent> {
  public convertToFrontend = (model: IShareEvent): IShareEventModel => {
    let returnModel: IShareEventModel = {
      userId: model.userId.toString(),
      accessKey: model.accessKey,
      expireDate: model.expireDate,
      type: model.type,
      sharedBy: model.sharedBy,
      sharedWith: model.sharedWith.map((e) => e),
      data: model.data,
    };

    returnModel = mapTrackedEntity(model, returnModel);

    return returnModel;
  }

  public convertToBackend = (
    model: IShareEventModel,
    existing?: IShareEvent | undefined,
    modifier?: string): IShareEvent => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tempReturnModel: any = {};
    if (existing) {
      tempReturnModel = existing;
    }

    const returnModel: IShareEvent = tempReturnModel;
    if (modifier) {
      tempReturnModel = setUserModifier(returnModel, modifier);
    }

    const sharedWith = new Types.Array<string>();
    model.sharedWith.forEach((e) => {
      sharedWith.push(e);
    });

    returnModel.userId = new ObjectId(model.userId);
    returnModel.accessKey = model.accessKey;
    returnModel.expireDate = model.expireDate;
    returnModel.type = model.type;
    returnModel.sharedBy = model.sharedBy;
    returnModel.sharedWith = sharedWith;
    returnModel.data = model.data;

    return returnModel;
  }
}

export const shareEventConverter = new ShareEventConverter();
