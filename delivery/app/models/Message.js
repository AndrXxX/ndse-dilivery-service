const { Schema, model, ObjectIdSchemaDefinition } = require('mongoose');

const messageSchema = new Schema({
  author: {
    type: ObjectIdSchemaDefinition,
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
