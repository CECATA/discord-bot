const axios = require('axios');

module.exports = {
  name: 'archwiki',
  description: 'Search in the Arch Wiki',
  execute(msg, args) {
    if (args.lenght === 0) {
      return msg.channel.send("No hubo una búsqueda\n<prefix>archwiki <argument>");
    }
    let url = 'https://wiki.archlinux.org/index.php/'
    axios
      .get(url + args[0])
      .then(res => {
        return msg.channel.send(url + args[0]);
      })
      .catch(err => {
        url = `${url}?search=${args[0]}` 
        return msg.channel.send(url);
      });
  }
}
