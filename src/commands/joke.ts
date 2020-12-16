import axios from 'axios';

import { Command } from '../interfaces/interfaces';


const command: Command = {
  name: 'joke',
  aliases: [],
  description: 'Retorna una broma como mensaje',
  execute(msg, args) {
    let url = '';
    if (args[0] == 'dark') {
      url = 'https://sv443.net/jokeapi/v2/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist' 
    } else {
      url = 'https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Spooky,Christmas?blacklistFlags=religious,racist,sexist,nsfw'
    }
    // Fetch joke
    axios
      .get(url)
      .then(res => {
        if (!res.data.error) {
          if (res.data.type == 'single') {
            return msg.channel.send(res.data.joke);
          } else if (res.data.type == 'twopart') {
            const response = `- ${res.data.setup}\n- ${res.data.delivery}`
            return msg.channel.send(response);
          }
        }
      })
      .catch(err => console.log(err));
  }
}

export default command;
