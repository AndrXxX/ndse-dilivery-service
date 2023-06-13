const formatter = require("../../../utils/ResponseFormatter");

module.exports = async (req, res) => {
  await req.logout(() => {
    res
      .status(201)
      .json(formatter.ok({}));
  });
};
