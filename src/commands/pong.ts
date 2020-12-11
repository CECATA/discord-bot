import { Command } from '../interfaces/interfaces';


const command: Command = {
    name: 'pong',
    description: 'Return Ping!',
    aliases: [],
    execute(msg) {
        return msg.channel.send('Ping!');
    }
}

export default command;
