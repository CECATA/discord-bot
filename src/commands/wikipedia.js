const Discord = require('discord.js');
const wiki = require('wikijs').default;

module.exports = {
  name: 'wikipedia',
  description: 'Busca en wikipedia',
  aliases: ['wiki', 'wk'],
  execute(msg, args) {
    if (args.length === 0) {
      return msg.channel.send('No hubo una búsqueda\n\`<prefix>\`wikipedia <query>');
    }

    wiki()
      .page(args.join(' '))
      .then(page => {
        const response = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle(`Wikipedia: ${page.raw.title}`)
          .setURL(page.raw.fullurl)
          .setDescription(page.raw.fullurl);
        return msg.channel.send(response);
      })
      .catch(err => console.log(err));
  }
}
