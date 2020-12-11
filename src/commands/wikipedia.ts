import { MessageEmbed } from 'discord.js';
import wiki from 'wikijs';
import { Page } from 'wikijs';

import { Command } from '../interfaces/interfaces';


const command: Command = {
    name: 'wikipedia',
    description: 'Busca en wikipedia',
    aliases: ['wiki', 'wk'],
    execute(msg, args) {
        if (args.length === 0) {
            return msg.channel.send('No hubo una búsqueda\n\`<prefix>\`wikipedia <query>');
        }

        wiki()
            .page(args.join(' '))
            .then((page: Page) => {
                const response = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`Wikipedia: ${page.info('title')}`)
                .setURL(page.url())
                .setDescription(page.url());
                return msg.channel.send(response);
            })
            .catch(err => console.log(err));
    }
}

export default command;
