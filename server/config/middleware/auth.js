const { User } = require('../../app/models');

function auth (req, res, next) {
  let token = req.cookies.x_auth;

  User.findByToken(token, findByTokenCallback);

  function findByTokenCallback (error, user) {
    if (error) { throw error; }

    let response;
    if (!user) {
      response = {
        isAuth: false,
        error: true,
      };

      return res.json(response);
    }

    req.token = token;
    req.user = user;
    return next();
  }
}

module.exports = auth;