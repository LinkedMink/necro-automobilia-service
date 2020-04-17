import { ObjectAttribute, ObjectDescriptor } from "../../infastructure/ObjectDescriptor";

import { ShareEventType } from "../database/ShareEvent";

/**
 * @swagger
 * definitions:
 *   IShareRequest:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *       sharedWith:
 *         type: string
 *       data:
 *         type: string
 *     required:
 *       - type
 *       - sharedWith
 *       - data
 */
export interface IShareRequest {
  type: ShareEventType;
  sharedWith: string[];
  data: unknown;
}

export const shareRequestDescriptor = new ObjectDescriptor<IShareRequest>(
  {
    type: [ObjectAttribute.Required],
    sharedWith: [ObjectAttribute.Required],
    data: [ObjectAttribute.Required],
  },
);
