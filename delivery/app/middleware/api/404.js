const formatter = require('../../utils/ResponseFormatter');

module.exports = (req, res) => {
  res.status(404);
  res.json(formatter.error("404 | Not found"));
};
