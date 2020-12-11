import { Command } from '../interfaces/interfaces';


const command: Command = {
  name: 'hoy',
  aliases: [],
  description: 'Regresa la fecha de hoy',
  execute(msg, _args) {
    const date = new Date().toLocaleDateString();
    return msg.channel.send(date);
  }
}


export default command;
