const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping' && msg.channel.id === '775425712085532684') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
