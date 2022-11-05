const { Category } = require("../models");

const categories = async () => {
  return await Category.find();
};

module.exports = { categories };
