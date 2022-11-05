const { Product } = require("../models");

const products = async (parent, { category, name }) => {
  const params = {};

  if (category) {
    params.category = category;
  }

  if (name) {
    params.name = {
      $regex: name,
    };
  }

  return await Product.find(params).populate("category");
};

const product = async (parent, { _id }) => {
  return await Product.findById(_id).populate("category");
};

const updateProduct = async (parent, { _id, quantity }) => {
  const decrement = Math.abs(quantity) * -1;

  return await Product.findByIdAndUpdate(
    _id,
    { $inc: { quantity: decrement } },
    { new: true }
  );
};

module.exports = { product, products, updateProduct };
