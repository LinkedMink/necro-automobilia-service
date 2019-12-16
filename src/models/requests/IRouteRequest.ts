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
}

export const routeRequestDescriptor = new ObjectDescriptor<IRouteRequest>(
  {
    source: [ObjectAttribute.Required],
    destination: [ObjectAttribute.Required],
  },
  false,
  (toSanitize: IRouteRequest) => {
    if (toSanitize.source) {
      toSanitize.source = JSON.parse(toSanitize.source as unknown as string);
    }
    if (toSanitize.destination) {
      toSanitize.destination = JSON.parse(toSanitize.destination as unknown as string);
    }
    return toSanitize;
  },
);
