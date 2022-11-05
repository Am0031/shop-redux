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

const seedDb = async () => {
  try {
    // clear all collections
    await clearCollections();

    //create categories
    await seedCategories();

    //create products
    await seedProducts();

    //create users
    await seedUsers();
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }
};

connection.once("open", async () => {
  await seedDb;
  process.exit(0);
});
