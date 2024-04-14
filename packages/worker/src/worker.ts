import {
  TelegramCommands,
  Handler,
  TelegramWebhook,
  TelegramBot,
} from "../../main/src/main";
import { Command } from "../../main/src/types";

interface Environment {
  SECRET_TELEGRAM_API_TOKEN: string;
  KV_GET_SET: KVNamespace;
  KV_UID_DATA: KVNamespace;

  SECRET_TELEGRAM_API_TOKEN2: string;

  SECRET_TELEGRAM_API_TOKEN3: string;

  SECRET_TELEGRAM_API_TOKEN4: string;

  SECRET_TELEGRAM_API_TOKEN5: string;

  AI: string;

  DB: D1Database;

  R2: R2Bucket;
}

export default {
  fetch: async (request: Request, env: Environment) =>
    new Handler([
      {
        bot_name: "@CourtneyTherapyBot",
        api: TelegramBot,
        webhook: new TelegramWebhook(
          new URL(
            `https://api.telegram.org/bot${env.SECRET_TELEGRAM_API_TOKEN}`
          ),
          env.SECRET_TELEGRAM_API_TOKEN,
          new URL(new URL(request.url).origin)
        ),
        commands: {
          default: TelegramCommands.question as Command,
          inline: TelegramCommands.question as Command,
          "/ping": TelegramCommands.ping as Command,
          "/start": TelegramCommands.question as Command,
        },
        kv: { get_set: env.KV_GET_SET, uid_data: env.KV_UID_DATA },
        ai: env.AI,
        db: env.DB,
        r2: env.R2,
      },
    ]).handle(request),
};
