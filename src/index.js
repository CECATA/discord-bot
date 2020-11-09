const fs = require('fs');
const Discord = require('discord.js');
require('dotenv').config();
const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Load commands
const commandFiles = fs.readdirSync(__dirname + '/commands')
                        .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split('/ +/');
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);

  if (!command) return;

  try {
    command.execute(msg, args);
  } catch(err) {
    console.error(err);
    msg.reply("Error trying to execute command!");
  }
});

client.login(process.env.BOT_TOKEN);
