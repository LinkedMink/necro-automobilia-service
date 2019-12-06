import { ObjectAttribute, ObjectDescriptor } from "../../infastructure/objectDescriptor";

export enum SortOrder {
  Ascending = 0,
  Descending = 1,
}

/**
 * @swagger
 * definitions:
 *   ISearchRequest:
 *     type: object
 *     properties:
 *       pageSize:
 *         type: string
 *       pageNumber:
 *         type: string
 */
export interface ISearchRequest {
  pageSize: number;
  pageNumber: number;
  sort: { [key: string]: SortOrder; };
  query: { [key: string]: any; };
}

export const searchRequestDescriptor = new ObjectDescriptor<ISearchRequest>({
  pageSize: [ObjectAttribute.Range, 1, 100],
  pageNumber: [ObjectAttribute.Range, 0],
});
