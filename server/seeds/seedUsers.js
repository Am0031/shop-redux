const { User, Product } = require("../models");

const seedUsers = async () => {
  const products = await Product.find();
  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password123",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password123",
  });

  console.log("users successfully seeded");
};

module.exports = { seedUsers };
