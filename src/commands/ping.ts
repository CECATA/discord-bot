import { Command } from '../interfaces/interfaces';


const command: Command = {
    name: 'ping',
    description: 'Ping!',
    aliases: [],
    execute(msg, _args) {
        return msg.channel.send('Pong!');
    },
};

export default command;
