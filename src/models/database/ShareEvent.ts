import { model, Schema, SchemaTypes, Types } from "mongoose";

import { trackedEntityPreValidateFunc } from "./TrackedEntity";
import { IUserEntity, userEntitySchemaDefinition } from "./UserEntity";

export enum ShareEventType {
  Route = "ROUTE",
  Accident = "ACCIDENT",
}

const schemaDefinition = Object.assign({}, userEntitySchemaDefinition, {
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

export interface IShareEvent extends IUserEntity {
  accessKey: string;
  expireDate: Date;
  type: ShareEventType;
  sharedBy: string;
  sharedWith: Types.Array<string>;
  data: any;
}

export const ShareEvent = model<IShareEvent>("ShareEvent", shareEventSchema);
