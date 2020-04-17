
import { Router } from "express";
import { ParamsDictionary, Request, Response } from "express-serve-static-core";

import { objectDescriptorBodyVerify } from "../infastructure/ObjectDescriptor";
import { AuthorizationClaim, authorizeJwtClaim } from "../middleware/Authorization";
import { getResponseSuccess } from "../models/IResponseData";
import { IRouteRiskModel, ISegmentRiskModel } from "../models/IRouteRiskModel";
import { IRouteRequest, routeRequestDescriptor } from "../models/requests/IRouteRequest";
import { getHaversineDistance } from "../shared/Geospatial";

export const routeRouter = Router();

const KM_PER_MILE = 0.621371;

const getRandomRecentDate = (): Date => {
  const upTo48Hours = Math.random() * 1000 * 60 * 60 * 48;
  return new Date(Date.now() - upTo48Hours);
};

const getRandomMicromorts = (): number => {
  return (Math.random() / 5) + 1 / 10000;
};

const getMockResponse = (reqData: IRouteRequest): IRouteRiskModel => {
  let distance = 0;
  let totalMicromorts = 0;
  const segments: ISegmentRiskModel[] = [];

  let lastPoint = reqData.route[0];
  for (let i = 1; i < reqData.route.length; i++) {
    const segmentDistance = getHaversineDistance(lastPoint, reqData.route[i]);
    const segment = {
      start: lastPoint,
      distance: segmentDistance,
      micromorts: getRandomMicromorts() * segmentDistance * KM_PER_MILE,
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
    modelCalculatedOn: getRandomRecentDate(),
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
  objectDescriptorBodyVerify(routeRequestDescriptor),
  (req: Request<ParamsDictionary>, res: Response) => {

  const reqData = req.body as IRouteRequest;
  const mockResponse = getMockResponse(reqData);

  return res.send(getResponseSuccess(mockResponse));
});
