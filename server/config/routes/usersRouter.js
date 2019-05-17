const express = require('express');
const router = express.Router();
const { auth } = require('../middleware');
const controller = require('../../app/controllers/usersController');

router.get('/auth', auth, controller.auth);
router.get('/logout', auth, controller.logout);

router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;
