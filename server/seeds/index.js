const connection = require("../config/connection");
const { User, Product, Category } = require("../models");
const { seedCategories } = require("./seedCategories");
const { seedProducts } = require("./seedProducts");
const { seedUsers } = require("./seedUsers");

const clearCollections = async () => {
  await Category.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();
};

connection.once("open", async () => {
  // clear all collections
  await clearCollections();

  //create categories
  await seedCategories();

  //create products
  await seedProducts();

  //create users
  await seedUsers();

  //end process
  process.exit(0);
});
