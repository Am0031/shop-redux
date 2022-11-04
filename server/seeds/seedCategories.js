const { Category } = require("../models");

const categories = [
  { name: "Food" },
  { name: "Household Supplies" },
  { name: "Electronics" },
  { name: "Books" },
  { name: "Toys" },
];

const seedCategories = async () => {
  await Category.insertMany(categories);

  console.log("categories successfully seeded");
};

module.exports = { seedCategories };
