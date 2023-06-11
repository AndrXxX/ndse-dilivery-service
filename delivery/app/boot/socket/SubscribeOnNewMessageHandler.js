const chatModule = require("../../Modules/ChatModule");

module.exports = async (socket) => {
  const currentUser = socket.request.user;
  chatModule.subscribe(async ({ chatId, message }) => {
    const chat = await chatModule.findById(chatId);
    console.log("chat", chat);
    console.log("chat.messages.includes", chat.users.includes(currentUser.id));
    if (chat && chat.users.includes(currentUser.id)) {
      socket.emit('newMessage', message);
    }
  })
};
