import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  conditionImpairmentAtTimeOfCrashDriver: { type: SchemaTypes.Number },
  conditionImpairmentAtTimeOfCrashDriverName: { type: SchemaTypes.String },
};

export const driverImpairSchema = new Schema(schemaDefinition);

export interface IDriverImpair extends Types.Subdocument {
  conditionImpairmentAtTimeOfCrashDriver: number;
  conditionImpairmentAtTimeOfCrashDriverName: string;
}
