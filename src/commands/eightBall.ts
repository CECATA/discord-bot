import { Command } from '../interfaces/interfaces';


const responses = [
  'Sí.',
  'Es cierto.',
  'Todo apunta a que sí.',
  'Las perspectivas no son buenas.',
  'Es decididamente así.',
  'Será mejor que no te lo diga ahora.',
  'Concéntrate y vuelve a pregunta.',
  'En mi opinión, sí.',
  'Muy dudoso.',
  'Mi respuesta es no.',
  'Probablemente.'
]

const command: Command = {
  name: '8ball',
  aliases: ['8b', 'eithball'],
  description: 'Hace predicciones sobre el futuro',
  execute(msg, args) {
    if (args.length === 0) {
      return msg.channel.send("No ha realizado una pregunta");
    }
    const index = Math.floor(Math.random() * responses.length);
    const res = responses[index];
    return msg.reply(res);
  }
}

export default command;
