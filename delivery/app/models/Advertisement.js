const { Schema, model, ObjectId } = require('mongoose');

const advertisementSchema = new Schema({
  shortText: {
    type: String,
    required: [true, 'Не указан текст сообщения'],
  },
  description: {
    type: String,
    required: false,
  },
  images: {
    type: [String],
    required: false,
  },
  userId: {
    type: ObjectId,
    required: [true, 'Не указан идентификатор пользователя'],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  tags: {
    type: [String],
    required: false,
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = model('Advertisement', advertisementSchema);
