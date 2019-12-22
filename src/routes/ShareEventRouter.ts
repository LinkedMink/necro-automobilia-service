import { createCrudRouter } from "../infastructure/CreateCrudRouter";
import { AuthorizationClaim } from "../middleware/Authorization";
import { shareEventConverter } from "../models/converters/ShareEventConverter";
import { ShareEvent } from "../models/database/ShareEvent";

export const shareEventRouter = createCrudRouter(
  ShareEvent,
  shareEventConverter,
  AuthorizationClaim.NecroAutomobiliaAdmin);
