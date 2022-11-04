const { Category } = require("../models");

const getCategories = async () => {
  return await Category.find();
};

module.exports = { getCategories };
