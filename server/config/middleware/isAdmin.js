const { User } = require('../../app/models');

function isAdmin (req, res, next) {
  const { user } = req;
  if (user.role === 0) {
    return res.send("Oops! You're not allowed to do that!");
  }

  return next();
}

module.exports = isAdmin;