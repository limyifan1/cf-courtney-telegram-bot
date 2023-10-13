import TelegramBot from "./telegram_bot";
import { TelegramUpdate } from "./types";

export default class TelegramCommands {
	static ping = async (
		bot: TelegramBot,
		update: TelegramUpdate,
		args: string[]
	) => bot.ping(update, args);
	static toss = async (bot: TelegramBot, update: TelegramUpdate) =>
		bot.toss(update);
	static epoch = async (bot: TelegramBot, update: TelegramUpdate) =>
		bot.epoch(update);
	static kanye = async (bot: TelegramBot, update: TelegramUpdate) =>
		bot.kanye(update);
	static bored = async (bot: TelegramBot, update: TelegramUpdate) =>
		bot.bored(update);
	static joke = async (bot: TelegramBot, update: TelegramUpdate) =>
		bot.joke(update);
	static dog = async (bot: TelegramBot, update: TelegramUpdate) =>
		bot.dog(update);
	static roll = async (
		bot: TelegramBot,
		update: TelegramUpdate,
		args: string[]
	) => bot.roll(update, args);
	static _get = async (
		bot: TelegramBot,
		update: TelegramUpdate,
		args: string[]
	) => bot._get(update, args);
	static _set = async (
		bot: TelegramBot,
		update: TelegramUpdate,
		args: string[]
	) => bot._set(update, args);
	static duckduckgo = async (
		bot: TelegramBot,
		update: TelegramUpdate,
		args: string[]
	) => bot.duckduckgo(update, args);
	static paste = async (
		bot: TelegramBot,
		update: TelegramUpdate,
		args: string[]
	) => bot.paste(update, args);
	static question = async (
		bot: TelegramBot,
		update: TelegramUpdate,
		args: string[]
	) => bot.question(update, args);
	static sean = async (
		bot: TelegramBot,
		update: TelegramUpdate,
		args: string[]
	) => bot.sean(update, args);
	static clear = async (bot: TelegramBot, update: TelegramUpdate) =>
		bot.clear(update);
	static code = async (bot: TelegramBot, update: TelegramUpdate) =>
		bot.code(update);
	static commandList = async (bot: TelegramBot, update: TelegramUpdate) =>
		bot.commandList(update);
}
