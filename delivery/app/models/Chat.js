const { Schema, model, ObjectId } = require('mongoose');
const Message = require('./Message')

const chatSchema = new Schema({
  users: {
    type: [ObjectId, ObjectId],
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  messages: {
    type: [Message],
    required: true,
  },
});

module.exports = model('Chat', chatSchema);
