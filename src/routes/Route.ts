
import { Router } from "express";
import { ParamsDictionary, Request, Response } from "express-serve-static-core";

import { objectDescriptorBodyVerify } from "../infastructure/ObjectDescriptor";
import { authorizeJwtClaim } from "../middleware/Authorization";
import { getResponseSuccess } from "../models/IResponseData";
import { IRouteRiskModel } from "../models/IRouteRiskModel";
import { IRouteRequest, routeRequestDescriptor } from "../models/requests/IRouteRequest";

export const routeRouter = Router();

const getMockResponse = (reqData: IRouteRequest): IRouteRiskModel => {
  return {
    source: reqData.source,
    destination: reqData.destination,
    distance: (Math.random() * 100),
    averageMicromorts: (Math.random() / 5) + 1 / 10000,
    modelCalculatedOn: new Date(),
  };
};

/**
 * @swagger
 * /route:
 *   get:
 *     description: Send a request to retrieve the risk profile fro a route
 *     tags: [Route]
 *     responses:
 *       200:
 *         description: The request was successful.
 */
routeRouter.get("/",
  authorizeJwtClaim(),
  objectDescriptorBodyVerify(routeRequestDescriptor, false),
  async (req: Request<ParamsDictionary, any, any>, res: Response) => {

  const reqData = req.query as IRouteRequest;
  const mockResponse = getMockResponse(reqData);

  return res.send(getResponseSuccess(mockResponse));
});
