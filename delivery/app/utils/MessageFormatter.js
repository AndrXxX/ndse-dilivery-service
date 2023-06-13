module.exports = {
  format(message) {
    return {
      author: typeof message.author === "object" ? {
        id: message.author.id,
        name: message.author.name,
      } : { id: message.author },
      sentAt: message.sentAt,
      text: message.text,
    };
  },
};
