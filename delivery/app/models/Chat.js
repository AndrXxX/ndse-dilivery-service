const { Schema, model, ObjectIdSchemaDefinition } = require('mongoose');
const Message = require('./Message')

const chatSchema = new Schema({
  users: {
    type: [ObjectIdSchemaDefinition, ObjectIdSchemaDefinition],
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
