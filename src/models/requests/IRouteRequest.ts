import { ObjectAttribute, ObjectDescriptor } from "../../infastructure/ObjectDescriptor";

/**
 * @swagger
 * definitions:
 *   IRouteRequest:
 *     type: object
 *     properties:
 *       source:
 *         type: string
 *       destination:
 *         type: string
 *     required:
 *       - source
 *       - destination
 */
export interface IRouteRequest {
  source: number[];
  destination: number[];
  route: number[][];
}

export const routeRequestDescriptor = new ObjectDescriptor<IRouteRequest>(
  {
    source: [ObjectAttribute.Required],
    destination: [ObjectAttribute.Required],
    route: [ObjectAttribute.Required],
  },
);
