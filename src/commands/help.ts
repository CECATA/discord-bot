import { Command } from '../interfaces/interfaces';
import config from '../config';


const command: Command = {
    name: 'help',
    aliases: ['h'],
    description: 'Lista los comandos disponibles',
    execute(msg, _args) {
        const response = `
        > Estos son los comandos soportados:

        \`${config.prefix}help\`: Lista los comandos disponibles.
        \`${config.prefix}archwiki <busqueda>\`: Busca en https://wiki.archlinux.org.
        \`${config.prefix}8ball <pregunta>\`: Bola mágica con respuestas sobre el futuro.
        \`${config.prefix}google <busqueda>\`: Busca en google y retorna el link.
        \`${config.prefix}hoy\`: Te dice la fecha local.
        \`${config.prefix}joke <args: dark>\`: Busca bromas, cuidado con el modo \`dark\`.
        \`${config.prefix}ping\`: Pong!.
        \`${config.prefix}pong\`: Ping!.
        \`${config.prefix}wikipedia\`: Busca en las páginas de Wikipedia.
            `
        return msg.channel.send(response);
    }
}

export default command;
