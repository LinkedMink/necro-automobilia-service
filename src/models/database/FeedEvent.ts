import { model, Schema, SchemaTypes } from "mongoose";

import { ITrackedEntity, trackedEntityPreValidateFunc, trackedEntitySchemaDefinition } from "./TrackedEntity";

const feedEventSchemaDefinition = Object.assign({}, trackedEntitySchemaDefinition, {
  title: {
    type: SchemaTypes.String,
    required: true,
  },
  releaseDate: {
    type: SchemaTypes.Date,
    required: true,
    index: true,
  },
});

const feedEventSchema = new Schema(feedEventSchemaDefinition);
feedEventSchema.pre("validate", trackedEntityPreValidateFunc);

export interface IFeedEvent extends ITrackedEntity {
  title: string;
  releaseDate: Date;
}

export const FeedEvent = model<IFeedEvent>("FeedEvent", feedEventSchema);
