const usersStore = require('../../../Modules/UserModule');
const formatter = require('../../../utils/ResponseFormatter');

module.exports = async (req, res, next) => {
  let user = await usersStore.findByEmail(req.body.email);
  if (user) {
    res
      .status(401)
      .json(formatter.error("email занят"));
    return;
  }
  user = await usersStore.create(req.body);
  res
    .status(201)
    .json(formatter.ok({
      id: user.id,
      email: user.email,
      name: user.name,
      contactPhone: user.contactPhone,
    }));
  return next();
}
