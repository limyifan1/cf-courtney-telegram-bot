import { CommandList } from "./commands";
import ls from "./commands/ls";

export const commandList = new CommandList();


commandList.register(ls);