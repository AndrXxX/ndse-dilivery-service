module.exports =  (req, res, next) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.redirect('/api/user/signin');
  }
  next();
};
