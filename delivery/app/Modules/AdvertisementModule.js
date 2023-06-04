const AdvertisementModel = require('../models/Advertisement');

class AdvertisementModule {
  async find({ shortText, description, userId, tags }) {
    // TODO:
    // В объекте params должны учитываться следующие поля:
    //
    // shortText — поиск регулярным выражением;
    // description — поиск регулярным выражением;
    // userId — точное совпадение;
    // tags — значение в базе данных должно включать все искомые значения.
    return AdvertisementModel.find({ shortText, description, userId, tags, isDeleted: false }).select('-__v');
  }
  async create(data) {
    const model = new AdvertisementModel(data);
    await model.save();
    return model;
  }
  async remove(id) {
    const model = AdvertisementModel.findById(id);
    if (model) {
      model.isDeleted = true;
      model.save();
      return true;
    }
    return false;
  }
}

module.exports = new AdvertisementModule();
