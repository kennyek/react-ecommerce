const mongoose = require('mongoose');
const { Article, Brand, Wood } = require('../models');

const addArticle = async (req, res) => addOfType(Article, req, res);
const addBrand = async (req, res) => addOfType(Brand, req, res);
const addWood = async (req, res) => addOfType(Wood, req, res);
const getAllArticles = async (req, res) => getAllOfType(Article, req, res);
const getAllBrands = async (req, res) => getAllOfType(Brand, req, res);
const getAllWoods = async (req, res) => getAllOfType(Wood, req, res);
const getArticle = async (req, res) => getOfType(Article, req, res);

async function addOfType (Model, req, res) {
  const data = req.body;
  const model = new Model(data);

  try {
    const doc = await model.save();

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

async function getAllOfType (Model, req, res) {
  try {
    const model = await Model.find({});
    return res.status(200).send(model);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function getOfType (Model, req, res) {
  const { type } = req.query;
  let { id: items } = req.query;

  if (type === 'array') {
    items = items
      .split(',')
      .map(item => mongoose.Types.ObjectId(item));
  }

  const conditions = {
    '_id': { $in: items },
  };

  Article
    .find(conditions)
    .populate('brand')
    .populate('wood')
    .exec((error, docs) => {
      return res.status(200).send(docs);
    })
    ;
}

module.exports = {
  addArticle,
  addBrand,
  addWood,
  getAllArticles,
  getAllBrands,
  getAllWoods,
  getArticle,
};