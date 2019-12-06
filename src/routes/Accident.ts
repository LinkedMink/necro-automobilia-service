import { Router } from "express";

import { AuthorizationClaim, authorizeJwtClaim } from "../middleware/authorization";
import { Accident } from "../models/database/Accident";
import { getResponseObject, ResponseStatus } from "../models/Response";

export const accidentRouter = Router();

accidentRouter.get("/:entityId", authorizeJwtClaim([AuthorizationClaim.NecroAutomobiliaUser]),
  async (req, res) => {
    const entityId = req.params.entityId;
    const entity = await Accident.findById(entityId).exec();

    if (entity) {
      const response = getResponseObject();
      response.data = entity;
      return res.send(response);
    } else {
      res.status(404);
      return res.send(getResponseObject(ResponseStatus.Failed, `Failed to find ID: ${entityId}`));
    }
  });

accidentRouter.post("/", authorizeJwtClaim([AuthorizationClaim.NecroAutomobiliaUser]),
  async (req, res) => {
    const pingResponse = getResponseObject();
    res.send(pingResponse);
  });
