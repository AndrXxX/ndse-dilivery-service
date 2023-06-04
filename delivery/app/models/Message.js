const { Schema, model, ObjectId } = require('mongoose');

const messageSchema = new Schema({
  author: {
    type: ObjectId,
    required: true,
  },
  sentAt: {
    type: Date,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  readAt: {
    type: Date,
    required: false,
  },
});

module.exports = model('Message', messageSchema);
