const { Product } = require("../models");

const products = require("./products");

const seedProducts = async () => {
  await Product.insertMany(products);

  console.log("products successfully seeded");
};

module.exports = { seedProducts };
