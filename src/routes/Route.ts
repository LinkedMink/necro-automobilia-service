
import { Router } from "express";
import { ParamsDictionary, Request, Response } from "express-serve-static-core";

import { objectDescriptorBodyVerify } from "../infastructure/ObjectDescriptor";
import { AuthorizationClaim, authorizeJwtClaim } from "../middleware/Authorization";
import { getResponseSuccess } from "../models/IResponseData";
import { IRouteRiskModel, ISegmentRiskModel } from "../models/IRouteRiskModel";
import { IRouteRequest, routeRequestDescriptor } from "../models/requests/IRouteRequest";
import { getHaversineDistance } from "../shared/Geospatial";

export const routeRouter = Router();

const getRandomMicromorts = () => {
  return (Math.random() / 5) + 1 / 10000;
};

const getMockResponse = (reqData: IRouteRequest): IRouteRiskModel => {
  let distance = 0;
  let totalMicromorts = 0;
  const segments: ISegmentRiskModel[] = [];

  let lastPoint = reqData.route[0];
  for (let i = 1; i < reqData.route.length; i++) {
    const segment = {
      start: lastPoint,
      distance: getHaversineDistance(lastPoint, reqData.route[i]),
      micromorts: getRandomMicromorts(),
    };

    distance += segment.distance;
    totalMicromorts += segment.micromorts;
    segments.push(segment);

    lastPoint = reqData.route[i];
  }

  return {
    source: reqData.source,
    destination: reqData.destination,
    distance,
    totalMicromorts,
    averageMicromorts: totalMicromorts / distance,
    segments,
    modelCalculatedOn: new Date(),
  };
};

/**
 * @swagger
 * /routes:
 *   get:
 *     description: Send a request to retrieve the risk profile fro a route
 *     tags: [Route]
 *     responses:
 *       200:
 *         description: The request was successful.
 */
routeRouter.post("/",
  authorizeJwtClaim([AuthorizationClaim.NecroAutomobiliaUser]),
  objectDescriptorBodyVerify(routeRequestDescriptor, false),
  async (req: Request<ParamsDictionary, any, any>, res: Response) => {

  const reqData = req.query as IRouteRequest;
  const mockResponse = getMockResponse(reqData);

  return res.send(getResponseSuccess(mockResponse));
});
