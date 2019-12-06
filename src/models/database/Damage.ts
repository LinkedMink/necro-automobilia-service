import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  damagedAreas: { type: SchemaTypes.Number },
  damagedAreasName: { type: SchemaTypes.String },
};

export const damageSchema = new Schema(schemaDefinition);

export interface IDamage extends Types.Subdocument {
  damagedAreas: number;
  damagedAreasName: string;
}
