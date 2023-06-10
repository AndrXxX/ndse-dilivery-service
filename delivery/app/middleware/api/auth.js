const formatter = require('../../utils/ResponseFormatter');

module.exports =  (req, res, next) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res
      .status(401)
      .json(formatter.error('401 | Unauthorized'));
  }
  next();
};
