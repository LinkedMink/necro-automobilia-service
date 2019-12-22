import { createCrudRouter } from "../infastructure/CreateCrudRouter";
import { AuthorizationClaim } from "../middleware/Authorization";
import { feedEventConverter } from "../models/converters/FeedEventConverter";
import { FeedEvent } from "../models/database/FeedEvent";

export const feedEventRouter = createCrudRouter(
  FeedEvent,
  feedEventConverter,
  AuthorizationClaim.NecroAutomobiliaUser,
  AuthorizationClaim.NecroAutomobiliaAdmin);
