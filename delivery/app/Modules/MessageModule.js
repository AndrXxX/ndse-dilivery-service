const MessageModel = require('../models/Message');

class MessageModule {
  async create(text, author) {
    const message = new MessageModel({
      text,
      author,
    });
    await message.save();
    return message;
  }
}

module.exports = new MessageModule();
