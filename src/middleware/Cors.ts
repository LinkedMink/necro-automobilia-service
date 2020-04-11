import cors from "cors";

import { config, ConfigKey } from "../infastructure/Config";

export const CORS_ERROR = "Not allowed by CORS";

const originsData = config.getJsonOrString(ConfigKey.AllowedOrigins);
const corsOptions = {
  origin: originsData as any,
  optionsSuccessStatus: 200,
};

if (Array.isArray(originsData)) {
  corsOptions.origin = (origin: string, callback: any) => {
    if (originsData.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(CORS_ERROR));
    }
  };
}

export const corsMiddleware = cors(corsOptions);
