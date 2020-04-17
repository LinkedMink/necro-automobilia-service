import Email from "email-templates";
import nodemailer, { TransportOptions } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

import { config, ConfigKey } from "./Config";

const emailOptions = {
  message: {
    from: config.getString(ConfigKey.SystemEmailAddress),
  },
  transport: {
    jsonTransport: true,
  } as unknown as Mail,
  send: false,
};

const transportConfig = config.getJsonOrString<TransportOptions>(ConfigKey.NodeMailerTransport);
let transporter: Mail;
if (transportConfig) {
  transporter = nodemailer.createTransport(transportConfig);
  emailOptions.transport = transporter;
  emailOptions.send = true;
}

const email = new Email(emailOptions);

export const sendShare = (fromEmail: string, toEmail: string, type: string, accessKey: string): Promise<void> => {
  return email.send({
    template: "share",
    message: {
      to: toEmail,
    },
    locals: {
      appName: config.getString(ConfigKey.AppName),
      url: config.getString(ConfigKey.ShareUiUrl),
      email: fromEmail,
      type,
      accessKey,
    },
  });
};
