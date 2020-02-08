import { createCrudRouter } from "../infastructure/CreateCrudRouter";
import { AuthorizationClaim } from "../middleware/Authorization";
import { accidentConverter } from "../models/converters/AccidentConverter";
import { Accident } from "../models/database/Accident";

export const accidentRouter = createCrudRouter(
  Accident,
  accidentConverter,
  AuthorizationClaim.NecroAutomobiliaUser,
  AuthorizationClaim.NecroAutomobiliaAdmin);
