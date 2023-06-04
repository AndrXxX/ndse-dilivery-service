const { Schema, model, ObjectId } = require('mongoose');

const advertisementSchema = new Schema({
  shortText: {
    type: String,
    required: [true, 'Не указан email'],
    unique: true,
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
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
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
