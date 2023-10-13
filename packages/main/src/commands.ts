import TelegramBot from "./telegram_bot";
import { TelegramUpdate } from "./types";

type CommandFunction = (
		bot: TelegramBot,
		update: TelegramUpdate,
		args: string[]
	) => void | null;

export class CommandList {
  private commands: Record<string, string | CommandFunction> = {};

  register(cmd: CommandFunction, name: string | null = null) {
    this.commands[name || cmd.name] = cmd;
  }
}
