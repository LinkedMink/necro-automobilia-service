import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import passport from "passport";

import { config, ConfigKey, Environment } from "./infastructure/Config";
import { connectSingletonDatabase } from "./infastructure/Database";
import { corsMiddleware } from "./middleware/Cors";
import { errorMiddleware } from "./middleware/Error";
import { addJwtStrategy } from "./middleware/Passport";
import { accidentRouter } from "./routes/AccidentRouter";
import { feedEventRouter } from "./routes/FeedEventRouter";
import { pingRouter } from "./routes/PingRouter";
import { routeRouter } from "./routes/RouteRouter";
import { shareEventRouter } from "./routes/ShareEventRouter";
import { shareRouter } from "./routes/ShareRouter";
import { swaggerRouter } from "./routes/SwaggerRouter";

connectSingletonDatabase();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

addJwtStrategy(passport);
app.use(passport.initialize());

app.use(corsMiddleware);
app.use(errorMiddleware);

app.use("/ping", pingRouter);
app.use("/accidents", accidentRouter);
app.use("/feed-events", feedEventRouter);
app.use("/share-events", shareEventRouter);
app.use("/routes", routeRouter);
app.use("/shares", shareRouter);

if (process.env.NODE_ENV !== Environment.Production) {
  app.use("/docs", swaggerRouter);
}

export const server = app.listen(config.getString(ConfigKey.ListenPort));
