import { Command } from '../interfaces/interfaces';


const command: Command = {
    name: 'google',
    description: 'Search in google',
    aliases: [],
    execute(msg, args) {
        const url = 'https://google.com/search?q=';
        const response = `${url}${args.join('%20')}`
        return msg.channel.send(response);
    }
}

export default command;
