const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
  users: {
    type: [Schema.Types.ObjectId, Schema.Types.ObjectId],
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  messages: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
});

module.exports = model('Chat', chatSchema);
