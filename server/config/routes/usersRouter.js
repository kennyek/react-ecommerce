const express = require('express');
const { auth } = require('../middleware');
const controller = require('../../app/controllers/usersController');
const router = express.Router();

router.get('/auth', auth, controller.auth);
router.get('/logout', auth, controller.logout);

router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;
