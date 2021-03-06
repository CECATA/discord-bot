import { Message } from 'discord.js';

export interface Command {
    name: string,
    aliases: string[],
    description: string,
    execute(msg: Message, args: string[]): void,
}
