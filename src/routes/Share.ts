
import { Router } from "express";
import { ParamsDictionary, Request, Response } from "express-serve-static-core";

import { objectDescriptorBodyVerify } from "../infastructure/ObjectDescriptor";
import { authorizeJwtClaim } from "../middleware/Authorization";
import { getResponseSuccess } from "../models/IResponseData";
import { IShareRequest, shareRequestDescriptor } from "../models/requests/IShareRequest";

export const shareRouter = Router();

/**
 * @swagger
 * /shares:
 *   get:
 *     description: Send a request to retrieve the risk profile fro a route
 *     tags: [Route]
 *     responses:
 *       200:
 *         description: The request was successful.
 */
shareRouter.post("/",
  authorizeJwtClaim(),
  objectDescriptorBodyVerify(shareRequestDescriptor, false),
  async (req: Request<ParamsDictionary, any, any>, res: Response) => {

  const reqData = req.query as IShareRequest;
  return res.send(getResponseSuccess(reqData));
});
