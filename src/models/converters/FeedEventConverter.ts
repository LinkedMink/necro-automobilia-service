import { IFeedEvent } from "../database/FeedEvent";
import { IFeedEventModel } from "../IFeedEventModel";
import { IModelConverter, mapTrackedEntity, setUserModifier } from "./IModelConverter";

export class FeedEventConverter implements IModelConverter<IFeedEventModel, IFeedEvent> {
  public convertToFrontend = (model: IFeedEvent): IFeedEventModel => {
    let returnModel: IFeedEventModel = {
      title: model.title,
      releaseDate: model.releaseDate,
    };

    returnModel = mapTrackedEntity(model, returnModel);

    return returnModel;
  }

  public convertToBackend = (
    model: IFeedEventModel,
    existing?: IFeedEvent | undefined,
    modifier?: string): IFeedEvent => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tempReturnModel: any = {};
    if (existing) {
      tempReturnModel = existing;
    }

    const returnModel: IFeedEvent = tempReturnModel;
    if (modifier) {
      tempReturnModel = setUserModifier(returnModel, modifier);
    }

    returnModel.title = model.title;
    returnModel.releaseDate = model.releaseDate;

    return returnModel;
  }
}

export const feedEventConverter = new FeedEventConverter();
