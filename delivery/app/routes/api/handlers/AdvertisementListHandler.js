const formatter = require('../../../utils/ResponseFormatter');
const advertisementFormatter = require('../../../utils/AdvertisementFormatter');
const advertisementModule = require("../../../Modules/AdvertisementModule");

module.exports = async (req, res) => {
  try {
    const advertisements = await advertisementModule.find({});
    return res
      .status(200)
      .json(formatter.ok(await Promise.all(advertisements.map(async (advertisement) => {
        return await advertisementFormatter.format(advertisement)
      }))));
  } catch (e) {
    const error = e.message || "Ошибка при получении списка объявлений";
    return res
      .status(401)
      .json(formatter.error(error));
  }
};
