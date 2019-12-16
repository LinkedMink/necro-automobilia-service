import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import passport from "passport";

import { config, ConfigKey, Environment } from "./infastructure/Config";
import { connectSingletonDatabase } from "./infastructure/Database";
import { corsMiddleware } from "./middleware/Cors";
import { errorMiddleware } from "./middleware/Error";
import { addJwtStrategy } from "./middleware/Passport";
import { accidentRouter } from "./routes/Accident";
import { feedEventRouter } from "./routes/FeedEvent";
import { pingRouter } from "./routes/Ping";
import { routeRouter } from "./routes/Route";
import { swaggerRouter } from "./routes/Swagger";

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
app.use("/feed-event", feedEventRouter);
app.use("/route", routeRouter);

if (process.env.NODE_ENV !== Environment.Production) {
  app.use("/docs", swaggerRouter);
}

export const server = app.listen(config.getString(ConfigKey.ListenPort));
