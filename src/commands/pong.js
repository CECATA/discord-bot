module.exports = {
  name: 'pong',
  description: 'Return Ping!',
  execute(msg) {
    msg.channel.send('Ping!');
  }
}
