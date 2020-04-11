import dotenv from "dotenv";
import fs from "fs";

export enum Environment {
  Local = "local",
  UnitTest = "unitTest",
  Development = "development",
  Production = "production",
}

export enum ConfigKey {
  AppName = "APP_NAME",
  AllowedOrigins = "ALLOWED_ORIGINS",
  JwtAudience = "JWT_AUDIENCE",
  JwtIssuer = "JWT_ISSUER",
  JwtSecretKeyFile = "JWT_SECRET_KEY_FILE",
  JwtSigningAlgorithm = "JWT_SIGNING_ALGORITHM",
  ListenPort = "LISTEN_PORT",
  LogFile = "LOG_FILE",
  LogLevel = "LOG_LEVEL",
  MongoDbConnectionString = "MONGO_DB_CONNECTION_STRING",

  SystemEmailAddress = "SYSTEM_EMAIL_ADDRESS",
  NodeMailerTransport = "NODE_MAILER_TRANSPORT",
  ShareUiUrl = "SHARE_UI_URL",
  ShareExpirationDays = "SHARE_EXPIRATION_DAYS",
}

const configDefaultMap: Map<ConfigKey, string | undefined> = new Map([
  [ConfigKey.AppName, "LinkedMink"],
  [ConfigKey.AllowedOrigins, "*"],
  [ConfigKey.JwtSigningAlgorithm, "RS256"],
  [ConfigKey.ListenPort, "8080"],
  [ConfigKey.LogFile, "combined.log"],
  [ConfigKey.LogLevel, "info"],

  [ConfigKey.SystemEmailAddress, "noreply@linkedmink.space"],
  [ConfigKey.NodeMailerTransport, ""],
  [ConfigKey.ShareUiUrl, "http://localhost/shared"],
  [ConfigKey.ShareExpirationDays, "90"],
]);

if (process.env.NODE_ENV === Environment.UnitTest) {
  dotenv.config({ path: ".env.test" });
}

export class EnvironmentalConfig {
  private fileBuffers: Map<ConfigKey, Buffer> = new Map();
  private jsonObjects: Map<ConfigKey, { [key: string]: any }> = new Map();
  private packageJsonValue: { [key: string]: any };

  constructor() {
    // const filePath = isEnvironmentLocal ? "../package.json" : "./package.json";
    const filePath = "./package.json";
    const data = fs.readFileSync(filePath, "utf8");
    this.packageJsonValue = JSON.parse(data);
  }

  public get isEnvironmentLocal(): boolean {
    return !process.env.NODE_ENV || process.env.NODE_ENV === Environment.Local;
  }

  public get isEnvironmentUnitTest(): boolean {
    return process.env.NODE_ENV === Environment.UnitTest;
  }

  public get isEnvironmentContainerized(): boolean {
    return process.env.IS_CONTAINER_ENV !== undefined && 
      process.env.IS_CONTAINER_ENV.trim().toLowerCase() === 'true';
  }

  public get packageJson(): { [key: string]: any } {
    return this.packageJsonValue;
  }

  public getString = (key: ConfigKey) => {
    return this.getConfigValue(key);
  }

  public getNumber = (key: ConfigKey) => {
    const value = this.getConfigValue(key);
    return Number(value);
  }

  public getBool = (key: ConfigKey) => {
    const value = this.getConfigValue(key);
    return value.trim().toLowerCase() === "true";
  }

  public getJsonOrString = (key: ConfigKey) => {
    const json = this.jsonObjects.get(key);
    if (json) {
      return json;
    }

    const value = this.getConfigValue(key).trim();
    if (value.length > 0 && (value.startsWith("{") || value.startsWith("["))) {
      return this.getJson(key);
    }

    return value;
  }

  public getJson = (key: ConfigKey) => {
    const json = this.jsonObjects.get(key);
    if (json) {
      return json;
    }

    const value = this.getConfigValue(key);
    const parsed = JSON.parse(value) as { [key: string]: any };
    this.jsonObjects.set(key, parsed);
    return parsed;
  }

  public getFileBuffer = (key: ConfigKey) => {
    const buffer = this.fileBuffers.get(key);
    if (buffer) {
      return buffer;
    }

    if (process.env.NODE_ENV === Environment.UnitTest) {
      return Buffer.alloc(0);
    }

    const filePath = this.getConfigValue(key);
    const data = fs.readFileSync(filePath);
    this.fileBuffers.set(key, data);
    return data;
  }

  private getConfigValue = (key: ConfigKey): string => {
    let configValue = process.env[key];
    if (configValue) {
      return configValue;
    }

    configValue = configDefaultMap.get(key);
    if (configValue !== undefined) {
      return configValue;
    }

    throw new Error(`Environmental variable must be defined: ${key}`);
  }
}

export const config = new EnvironmentalConfig();
