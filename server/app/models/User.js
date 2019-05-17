const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_I = 10;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  firstName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  cart: {
    type: Array,
    default: [],
  },
  history: {
    type: Array,
    default: [],
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
});

userSchema.pre('save', preSaveCallback);
userSchema.methods.comparePassword = comparePassword;
userSchema.methods.generateToken = generateToken;
userSchema.statics.findByToken = findByToken;

async function preSaveCallback (next) {
  const user = this;
  let salt;
  let hash;

  if (!user.isModified('password')) { return next(); }

  try {
    salt = await bcrypt.genSalt(SALT_I);
    hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
}

function comparePassword (providedPassword, callback) {
  const user = this;
  bcrypt.compare(providedPassword, user.password, compareCallback);

  function compareCallback (error, isMatch) {
    if (error) { return callback(error); }
    return callback(null, isMatch);
  }
}

function generateToken (callback) {
  const user = this;
  const { SECRET } = process.env;
  const token = jwt.sign(user._id.toHexString(), SECRET);

  user.token = token;
  return user.save(saveCallback);

  function saveCallback (error, user) {
    if (error) { return callback(error); }
    return callback(null, user);
  }
}

function findByToken (token, callback) {
  const user = this;
  const { SECRET } = process.env;

  jwt.verify(token, SECRET, function (error, decode) {
    const filter = {
      '_id': decode,
      token,
    };

    user.findOne(filter, function (error, user) {
      if (error) { return callback(error); }
      return callback(null, user);
    });
  });
}

const User = mongoose.model('User', userSchema);

module.exports = User;
