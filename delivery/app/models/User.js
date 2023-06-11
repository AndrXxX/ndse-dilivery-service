const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Не указан email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Не указан пароль (password)'],
  },
  name: {
    type: String,
    required: [true, 'Не указан логин (name)'],
  },
  contactPhone: {
    type: String,
    required: false,
  },
});

module.exports = model('User', userSchema);
