const ChatModel = require('../models/Chat');
const messageModule = require("./MessageModule");
const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

class ChatModule {
  async find(users) {
    const [ userId1, userId2 ] = users;
    return await ChatModel.findOne({ users: [userId1, userId2] }).populate('messages').select('-__v');
  }
  async findById(id) {
    return await ChatModel.findById(id).populate('messages').select('-__v');
  }
  async getOrCreate(users, message = null) {
    let chat = await this.find(users);
    if (!chat) {
      chat = new ChatModel();
      chat.users = users;
      chat.createdAt = new Date;
      chat.messages = [];
    }
    message && chat.messages.push(message.id);
    await chat.save();
    message && chatEmitter.emit('messageAdded', { chat, message});
    return chat;
  }
  async sendMessage(data) {
    const { author, receiver, text } = data;
    const message = await messageModule.create(text, author);
    await this.getOrCreate([author, receiver], message);
    return message;
  }
  subscribe(cb) {
    chatEmitter.on('messageAdded', ({ chat, message}) => {
      cb({ chatId: chat.id, message });
    });
  }
  async getHistory(id) {
    const chat = await this.findById(id);
    return chat ? chat.messages : [];
  }
}

module.exports = new ChatModule();
