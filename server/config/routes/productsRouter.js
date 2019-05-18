const express = require('express');
const { auth, isAdmin } = require('../middleware');
const controller = require('../../app/controllers/productController');
const router = express.Router();

router.get('/brands', controller.getAllBrands);
router.post('/brands', auth, isAdmin, controller.addBrand);

module.exports = router;
