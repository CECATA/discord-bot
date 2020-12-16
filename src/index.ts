import * as fs from 'fs';
import { CustomClient } from './models/models';
require('dotenv').config();
import config from './config';

import { Command } from './interfaces/interfaces';


const client = new CustomClient();

// Load commands
const commandFiles = fs.readdirSync(__dirname + '/commands')
    .filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
    const command: Command = require(`./commands/${file}`).default;
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    if (client.user) {
        client.user.setPresence({
            activity: { name: `Listening to ${config.prefix}help` }
        });
        console.log(`Logged in as ${client.user.tag}!`);
    }
});


client.on('message', msg => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    const args: string[] = msg.content.slice(config.prefix.length).trim().split(/ +/);
    let commandName: string | undefined = args.shift();
    if (!commandName) return;

    commandName = commandName.toLowerCase();

    const command: Command | undefined = client.commands.get(commandName)
        || client.commands.find((cmd): boolean => {
            if (!commandName) return false;
            return cmd.aliases.includes(commandName);
        });

    if (!command) return;

    try {
        command.execute(msg, args);
    } catch(err) {
        console.error(err);
        return msg.reply("Error trying to execute command!");
    }
});

client.login(process.env.BOT_TOKEN);
