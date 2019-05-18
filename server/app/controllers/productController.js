const { Brand } = require('../models');

async function addBrand (req, res) {
  const brandData = req.body;
  const brand = new Brand(brandData);

  try {
    console.log(brand);
    const doc = await brand.save();

    const response = {
      success: true,
      data: doc,
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

async function getAllBrands (req, res) {
  try {
    const brands = await Brand.find({});
    return res.status(200).send(brands);
  } catch (error) {
    return res.status(400).send(error);
  }
}

module.exports = {
  addBrand,
  getAllBrands,
};