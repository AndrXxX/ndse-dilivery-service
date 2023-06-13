const formatter = require('../../../utils/ResponseFormatter');
const advertisementFormatter = require('../../../utils/AdvertisementFormatter');
const advertisementModule = require("../../../Modules/AdvertisementModule");

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
      .json(formatter.ok(advertisementFormatter.format(advertisement)));
  } catch (e) {
    const error = e.message || "Ошибка при сохранении объявления";
    return res
      .status(401)
      .json(formatter.error(error));
  }
};
