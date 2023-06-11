const AdvertisementModel = require('../models/Advertisement');

class AdvertisementModule {
  async find({ id, shortText, description, userId, tags }) {
    const filters = { isDeleted: false };
    id && (filters.id = id);
    shortText && (filters.shortText = shortText);
    description && (filters.description = description);
    userId && (filters.userId = userId);
    tags && (filters.tags = tags);
    // TODO:
    // В объекте params должны учитываться следующие поля:
    //
    // shortText — поиск регулярным выражением;
    // description — поиск регулярным выражением;
    // userId — точное совпадение;
    // tags — значение в базе данных должно включать все искомые значения.
    return await AdvertisementModel.find(filters).select('-__v');
  }
  async create(data) {
    const model = new AdvertisementModel(data);
    await model.save();
    return model;
  }
  async remove(id) {
    const model = await this.find({ id });
    if (model) {
      model.isDeleted = true;
      model.save();
      return true;
    }
    return false;
  }
}

module.exports = new AdvertisementModule();
