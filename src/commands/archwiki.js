const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
  name: 'archwiki',
  description: 'Search in the Arch Wiki',
  execute(msg, args) {
    if (args.lenght === 0) {
      return msg.channel.send("No hubo una búsqueda\n<prefix>archwiki <argument>");
    }
    let url = 'https://wiki.archlinux.org/index.php/'
    axios
      .get(url + args[0])
      .then(res => {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`ArchWiki: ${args[0].toUpperCase()}`)
            .setURL(url + args[0])
            .setDescription(url + args[0]);
        return msg.channel.send(embed);
      })
      .catch(err => {
        url = `${url}?search=${args[0]}` 
        return msg.channel.send(url);
      });
  }
}
