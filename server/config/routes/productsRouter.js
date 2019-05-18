const express = require('express');
const { auth, isAdmin } = require('../middleware');
const controller = require('../../app/controllers/productController');
const router = express.Router();

router.get('/articles', controller.getAllArticles);
router.post('/articles', auth, isAdmin, controller.addArticle)

router.get('/brands', controller.getAllBrands);
router.post('/brands', auth, isAdmin, controller.addBrand);

router.get('/woods', controller.getAllWoods);
router.post('/woods', auth, isAdmin, controller.addWood);

module.exports = router;
