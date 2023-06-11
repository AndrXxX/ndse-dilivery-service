const userModule = require("../Modules/UserModule");

module.exports = {
  async format(advertisement) {
    const user = await userModule.findById(advertisement.userId);
    return {
      id: advertisement.id,
      shortText: advertisement.shortText,
      description: advertisement.description,
      images: advertisement.images,
      user: user ? {
        id: user.id,
        name: user.name,
      } : {},
      createdAt: advertisement.createdAt,
    };
  },
};
