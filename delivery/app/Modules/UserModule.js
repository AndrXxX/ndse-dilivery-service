const UserModel = require('../models/User');
const generator = require('../utils/HashGenerator');

class UserModule {
  async create(data) {
    const user = new UserModel(data);
    user.password = generator.generate(data.password);
    await user.save();
    return user;
  }
  async findByEmail(email) {
    return UserModel.findOne({ email }).select('-__v');
  }
  async findById(id) {
    return UserModel.findById(id).select('-__v');
  }
}

module.exports = new UserModule();
