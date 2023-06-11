const chatModule = require("../../Modules/ChatModule");
const paramsConverter = require("../../utils/ParamsConverter");

module.exports = async (socket) => {
  const currentUser = socket.request.user;
  socket.on('getHistory', async (params) => {
    params = paramsConverter.convert(params);
    if (!params.id) {
      return socket.emit('chatHistory', []);
    }
    try {
      const chat = await chatModule.getOrCreate([currentUser.id, params.id]);
      return socket.emit('chatHistory', chat.messages);
    } catch (e) {
      console.error(e);
      return socket.emit('chatHistory', []);
    }
  });
};
