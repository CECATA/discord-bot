import { MessageEmbed } from 'discord.js';
import wiki, { Page } from 'wikijs'

import { Command } from '../interfaces/interfaces';


const url = 'https://wiki.archlinux.org/api.php';
wiki({ apiUrl: url, origin: undefined });

const command: Command = {
    name: 'archwiki',
    aliases: ['aw', 'arch'],
    description: 'Search in the Arch Wiki',
    execute(msg, args) {
        if (args.length === 0) {
            return msg.channel.send('No hubo una búsqueda\n\`<prefix>\`archwiki <query>');
        }
        wiki()
            .page(args.join('_'))
            .then((page: Page) => {
                const response = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`ArchWiki: ${page.info('title')}`)
                .setURL(page.url())
                .setDescription(page.url());
                return msg.channel.send(response)
            })
            .catch(err => console.log(err));
    }
}

export default command;
