import { Router } from "express";

import { createCrudRouter } from "../infastructure/CreateCrudRouter";
import { AuthorizationClaim, authorizeJwtClaim } from "../middleware/authorization";
import { accidentConverter } from "../models/converters/AccidentConverter";
import { Accident } from "../models/database/Accident";

export const accidentRouter = Router();

export const claimRouter = createCrudRouter(
  Accident,
  accidentConverter,
  AuthorizationClaim.NecroAutomobiliaUser,
  AuthorizationClaim.NecroAutomobiliaAdmin);
