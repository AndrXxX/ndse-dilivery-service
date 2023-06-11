const formatter = require('../../../utils/ResponseFormatter');
const advertisementModule = require("../../../Modules/AdvertisementModule");
const userModule = require("../../../Modules/UserModule");

module.exports = async (req, res) => {
  try {
    const params = req.body || {};
    params.userId = req.user.id;
    const files = req.files || {};
    if (files.images && files.images.length) {
      params.images = files.images.map(image => image.path);
    }
    const advertisement = await advertisementModule.create(params);
    return res
      .status(201)
      .json(formatter.ok({
        id: advertisement.id,
        shortTitle: advertisement.shortTitle,
        description: advertisement.description,
        images: advertisement.images,
        user: {
          id: advertisement.userId,
          name: (await userModule.findById(advertisement.userId)).name,
        },
        createdAt: advertisement.createdAt,
      }));
  } catch (e) {
    const error = e.message || "Ошибка при сохранении объявления";
    return res
      .status(401)
      .json(formatter.error(error));
  }
};
