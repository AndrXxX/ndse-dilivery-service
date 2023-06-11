const usersStore = require('../../../Modules/UserModule');
const formatter = require('../../../utils/ResponseFormatter');
const userFormatter = require('../../../utils/UserFormatter');

module.exports = async (req, res) => {
  let user = await usersStore.findByEmail(req.body.email);
  if (user) {
    return res
      .status(401)
      .json(formatter.error("email занят"));
  }
  try {
    user = await usersStore.create(req.body);
    res
      .status(201)
      .json(formatter.ok(userFormatter.format(user)));
  } catch (e) {
    return res
      .status(401)
      .json(formatter.error(e.message || "Ошибка при сохранении пользователя"));
  }
}
