const { User } = require('../models');

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
  register,
};
