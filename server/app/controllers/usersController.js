const { User } = require('../models');

async function auth (req, res) {
  const { user } = req;
  const { email, firstName, lastName, role, cart, history } = user;
  const isAdmin = role === 0 ? false : true;
  const isAuth = true;

  const response = {
    isAdmin,
    isAuth,
    email,
    firstName,
    lastName,
    role,
    cart,
    history,
  };

  res.status(200).json(response);
}

async function login (req, res) {
  const userData = req.body;
  const conditions = {
    'email': userData.email,
  };

  let response = {
    loginSuccess: false,
    message: 'Authentication failed',
  };

  try {
    const user = await User.findOne(conditions);
    user.comparePassword(userData.password, (error, isMatch) => {
      if (!isMatch) { return res.json(response); }
      return user.generateToken(generateTokenCallback);

      function generateTokenCallback (error, user) {
        if (error) { return res.status(400); }

        response = {
          loginSuccess: true,
        };

        return res
          .cookie('x_auth', user.token)
          .status(200)
          .json(response);
      }
    });
  } catch (error) {
    return res.json(response);
  }
}

async function register (req, res) {
  const userData = req.body;
  const user = new User(userData);

  try {
    const doc = await user.save();
    const data = { email: doc.email };

    const response = {
      success: true,
      data,
    };

    return res.status(200).json(response);
  } catch (error) {
    const response = {
      success: false,
      error,
    };

    return res.json(response);
  }
}

module.exports = {
  auth,
  login,
  register,
};
