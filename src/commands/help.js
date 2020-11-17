const { prefix } = require('../config.json');

module.exports = {
  name: 'help',
  aliases: ['h'],
  description: 'Lista los comandos disponibles',
  execute(msg, args) {
    const response = `
    > Estos son los comandos soportados:

    \`${prefix}help\`: Lista los comandos disponibles.
    \`${prefix}archwiki <busqueda>\`: Busca en https://wiki.archlinux.org.
    \`${prefix}8ball <pregunta>\`: Bola mágica con respuestas sobre el futuro.
    \`${prefix}google <busqueda>\`: Busca en google y retorna el link.
    \`${prefix}hoy\`: Te dice la fecha local.
    \`${prefix}joke <args: dark>\`: Busca bromas, cuidado con el modo \`dark\`.
    \`${prefix}ping\`: Pong!.
    \`${prefix}pong\`: Ping!.
    `
    return msg.channel.send(response);
  }
}
