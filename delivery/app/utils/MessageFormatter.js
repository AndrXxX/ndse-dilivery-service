const userModule = require("../Modules/UserModule");

const getAuthor = async (message) => {
  const author = (await userModule.findById(message.author)) || {};
  return  {
    id: author.id || message.author,
    name: author.name || "",
  };
}

module.exports = {
  async format(message) {
    return {
      author: await getAuthor(message),
      sentAt: message.sentAt,
      text: message.text,
    };
  },
};
