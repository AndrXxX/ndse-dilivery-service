const chatModule = require("../../Modules/ChatModule");
const paramsConverter = require("./ParamsConverter");

module.exports = async (socket) => {
  const currentUser = socket.request.user;
  socket.on('sendMessage', async (params) => {
    params = paramsConverter.convert(params);
    const { receiver, text } = params;
    if (!receiver || !text) {
      return;
    }
    try {
      await chatModule.sendMessage({ author: currentUser.id, receiver , text });
    } catch (e) {
      console.error(e);
    }
  });
};
