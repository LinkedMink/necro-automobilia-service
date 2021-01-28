
import cryptoRandomString from "crypto-random-string";
import { Router } from "express";
import { ParamsDictionary, Request, Response } from "express-serve-static-core";
import { Types } from "mongoose";

import { config, ConfigKey } from "../infastructure/Config";
import { objectDescriptorBodyVerify } from "../infastructure/ObjectDescriptor";
import { AuthorizationClaim, authorizeJwtClaim } from "../middleware/Authorization";
import { IJwtPayload } from "../middleware/Passport";
import { ShareEvent } from "../models/database/ShareEvent";
import { getResponseFailed, getResponseSuccess } from "../models/IResponseData";
import { IShareRequest, shareRequestDescriptor } from "../models/requests/IShareRequest";

const ACCESS_KEY_LENGTH = 30;

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
  authorizeJwtClaim([AuthorizationClaim.NecroAutomobiliaUser]),
  objectDescriptorBodyVerify(shareRequestDescriptor),
  async (req: Request<ParamsDictionary>, res: Response) => {

  const user = req.user as IJwtPayload;
  const reqData = req.body as IShareRequest;

  const modifier = `User(${user.sub})`;
  const sharedWithArray = new Types.Array<string>();
  reqData.sharedWith.forEach((other) => sharedWithArray.push(other));
  const accessKey = cryptoRandomString({length: ACCESS_KEY_LENGTH, type: "url-safe"});
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + config.getNumber(ConfigKey.ShareExpirationDays));

  const event = {
    userId: user.sub,
    accessKey,
    expireDate,
    type: reqData.type,
    sharedBy: user.email,
    sharedWith: sharedWithArray,
    data: reqData.data,
    createdBy: modifier,
    modifiedBy: modifier,
  };

  const saveModel = new ShareEvent(event);
  await saveModel.save((error) => {
    if (error) {
      let message = error.message;

      res.status(400);
      return res.send(getResponseFailed(message));
    }

    return res.send(getResponseSuccess());
  });
});
