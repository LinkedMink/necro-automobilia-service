import { NextFunction, ParamsDictionary, Request, Response } from "express-serve-static-core";
import { getResponseObject, ResponseStatus } from "../models/Response";

export enum ObjectAttribute {
  Required,
  Range,
}

export interface IObjectAttributeParams {
  value: ObjectAttribute;
  params: { [key: string]: any; };
}

export class ObjectDescriptor<TVerify> {
  constructor(
    private descriptors: { [key: string]: Array<ObjectAttribute | IObjectAttributeParams>; }) {}

  public verify = (toVerify: any): string[] | TVerify => {
    const errors: string[] = [];

    for (const [property, attributes] of Object.entries(this.descriptors)) {
      attributes.forEach((attribute) => {
        if (attribute === ObjectAttribute.Required && !toVerify[property]) {
          errors.push(`${property}: Required`);
        } else {
          const complex = (attribute as IObjectAttributeParams);
          if (complex.value === ObjectAttribute.Range) {
            if (complex.params.min && toVerify[property] < complex.params.min) {
              errors.push(`${property}: must be greater than ${complex.params.min}`);
            }

            if (complex.params.max && toVerify[property] > complex.params.max) {
              errors.push(`${property}: must be less than ${complex.params.max}`);
            }
          }
        }
      });
    }

    return toVerify as TVerify;
  }
}

export const objectDescriptorBodyVerify = <TVerify>(descriptor: ObjectDescriptor<TVerify>) => {
  return (req: Request<ParamsDictionary, any, any>, res: Response, next: NextFunction) => {
    if (!req.body) {
      res.status(400);
      return res.send(getResponseObject(ResponseStatus.Failed, "Empty Body"));
    }

    const modelCheck = descriptor.verify(req.body);
    if ((modelCheck as string[]).length) {
      res.status(400);
      return res.send(getResponseObject(
        ResponseStatus.Failed, (modelCheck as string[]).join(" ")));
    }
  };
};
