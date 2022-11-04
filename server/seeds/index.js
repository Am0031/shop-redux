const connectToDatabase = require("../config/connection");
const { User, Product, Category } = require("../models");
const { seedCategories } = require("./seedCategories");
const { seedProducts } = require("./seedProducts");
const { seedUsers } = require("./seedUsers");

const clearCollections = async () => {
  await Category.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();
};

const init = async () => {
  try {
    await connectToDatabase();

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

  process.exit(0);
};

init();
