const UserModel = require('../models/User');
const generator = require('../utils/HashGenerator');

class UserModule {
  async create(data) {
    const user = new UserModel(data);
    user.password = generator.generate(user.password);
    await user.save();
    return user;
  }
  async findByEmail(email) {
    return UserModel.findOne({ email }).select('-__v');
  }
}

module.exports = new UserModule();
