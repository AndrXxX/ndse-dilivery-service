const formatter = require('../../../utils/ResponseFormatter');
const advertisementModule = require("../../../Modules/AdvertisementModule");
const userModule = require("../../../Modules/UserModule");

module.exports = async (req, res) => {
  try {
    const advertisement = await advertisementModule.find({ id: req.params.id });
    const user = await userModule.findById(advertisement.userId);
    if (!user || req.user.id !== user.id) {
      return res
        .status(403)
        .json(formatter.error("Пользователь не является автором объявления"));
    }
    await advertisementModule.remove(req.params.id)
    return res
      .status(200)
      .json(formatter.ok({}));
  } catch (e) {
    const error = e.message || "Ошибка при удалении объявления";
    return res
      .status(401)
      .json(formatter.error(error));
  }
};
