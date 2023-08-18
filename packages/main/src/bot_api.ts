import Handler from "./handler";
import { Commands, Config, Update, Webhook, localhost } from "./types";

export default class BotApi {
	commands: Commands;
	webhook: Config["webhook"];
	handler: Handler;
	update!: (update: Update) => Promise<Response>;

	constructor(config: Partial<Config>) {
		this.commands = config.commands || {};
		this.webhook =
			config.webhook || new Webhook(new URL(localhost), "", new URL(localhost));
		this.handler = config.handler || new Handler([]);
	}
}
