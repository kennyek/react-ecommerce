const express = require('express');
const router = express.Router();
const { auth, isAdmin } = require('../middleware');
const controller = require('../../app/controllers/productController');

router.get('/brands', controller.getAll);
router.post('/brands', auth, isAdmin, controller.addBrand);

module.exports = router;
