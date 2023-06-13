const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  sentAt: {
    type: Date,
    required: true,
    default: Date.now,
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
