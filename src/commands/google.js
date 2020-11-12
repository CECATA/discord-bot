module.exports = {
  name: 'google',
  description: 'Search in google',
  execute(msg, args) {
    const url = 'https://google.com/search?q=';
    const response = `${url}${args.join('%20')}`
    return msg.channel.send(response);
  }
}
