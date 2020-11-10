module.exports = {
  name: 'hoy',
  description: 'Regresa la fecha de hoy',
  execute(msg) {
    const date = new Date().toLocaleDateString();
    msg.channel.send(date);
  }
}
