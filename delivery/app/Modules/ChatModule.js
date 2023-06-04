const ChatModel = require('../models/Chat');
const messageModule = require("./MessageModule");
const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

class ChatModule {
  async find(users) {
    const { userId1, userId2 } = users;
    return ChatModel.findOne({ users: [userId1, userId2] }).select('-__v');
  }
  async getOrCreate(users, message) {
    let chat = await this.find(users);
    if (!chat) {
      chat = new ChatModel();
      chat.users = users;
      chat.createdAt = new Date;
      chat.messages = [];
    }
    chat.messages.push(message);
    await chat.save();
    chatEmitter.emit('messageAdded', { chat, message});
    return chat;
  }
  async sendMessage(data) {
    const { author, receiver, text } = data;
    const message = messageModule.create(text, author);
    await this.getOrCreate([author, receiver], message);
    return message;
  }
  async subscribe(cb) {
    chatEmitter.on('messageAdded', ({ chat, message}) => {
      cb({ chatId: chat.id, message });
    });
  }
  async getHistory(id) {
    const chat = await ChatModel.findById(id).select('-__v');
    return chat ? chat.messages : [];
  }
}

module.exports = new ChatModule();
