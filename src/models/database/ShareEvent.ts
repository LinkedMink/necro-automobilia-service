import { model, Schema, SchemaTypes, Types } from "mongoose";

import { ITrackedEntity, trackedEntityPreValidateFunc, trackedEntitySchemaDefinition } from "./TrackedEntity";

export enum ShareEventType {
  Route = "ROUTE",
  Accident = "ACCIDENT",
}

const schemaDefinition = Object.assign({}, trackedEntitySchemaDefinition, {
  userId: {
    type: SchemaTypes.ObjectId,
    required: true,
    index: true,
  },
  accessKey: {
    type: SchemaTypes.String,
    required: true,
  },
  expireDate: {
    type: SchemaTypes.Date,
  },
  type: {
    type: SchemaTypes.String,
    enum: [ShareEventType.Route, ShareEventType.Accident],
    default: ShareEventType.Route,
    required: true,
  },
  sharedBy: {
    type: SchemaTypes.String,
    required: true,
  },
  sharedWith: {
    type: [SchemaTypes.String],
    required: true,
  },
  data: {
    type: SchemaTypes.Mixed,
  },
});

const shareEventSchema = new Schema(schemaDefinition);
shareEventSchema.pre("validate", trackedEntityPreValidateFunc);

export interface IShareEvent extends ITrackedEntity {
  userId: string;
  accessKey: string;
  expireDate: Date;
  type: ShareEventType;
  sharedBy: string;
  sharedWith: Types.Array<string>;
  data: any;
}

export const ShareEvent = model<IShareEvent>("ShareEvent", shareEventSchema);
