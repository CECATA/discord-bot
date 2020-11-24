const Wikijs = require('wikijs').default;
const Discord = require('discord.js');

const url = 'https://wiki.archlinux.org/api.php';
const wiki = Wikijs({ apiUrl: url, origin: null });

module.exports = {
  name: 'archwiki',
  aliases: ['aw', 'arch'],
  description: 'Search in the Arch Wiki',
  execute(msg, args) {
    if (args.length === 0) {
      return msg.channel.send('No hubo una búsqueda\n\`<prefix>\`archwiki <query>');
    }
    wiki
      .page(args.join('_'))
      .then(page => {
        const response = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle(`ArchWiki: ${page.raw.title}`)
          .setURL(page.raw.fullurl)
          .setDescription(page.raw.fullurl);
        return msg.channel.send(response)
      })
      .catch(err => console.log(err));
  }
}
