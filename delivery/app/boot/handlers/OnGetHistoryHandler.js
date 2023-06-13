const chatModule = require("../../Modules/ChatModule");
const paramsConverter = require("../../utils/ParamsConverter");
const messageFormatter = require("../../utils/MessageFormatter");

module.exports = async (socket) => {
  const currentUser = socket.request.user;
  socket.on('getHistory', async (params) => {
    params = paramsConverter.convert(params);
    if (!params.id) {
      return socket.emit('chatHistory', []);
    }
    try {
      const chat = await chatModule.getOrCreate([currentUser.id, params.id]);
      return socket.emit('chatHistory', await Promise.all(chat.messages.map(async (message) => await messageFormatter.format(message))));
    } catch (e) {
      console.error(e);
      return socket.emit('chatHistory', []);
    }
  });
};
