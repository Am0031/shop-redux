//will contain references to all resolvers
const { login, addUser } = require("./login");
const { updateUser, user } = require("./users");
const { product, products, updateProduct } = require("./products");
const { categories } = require("./categories");
const { order, checkout } = require("./orders");

const resolvers = {
  Query: {
    checkout,
    user,
    product,
    products,
    categories,
    order,
  },
  Mutation: {
    login,
    addUser,
    updateUser,
    updateProduct,
  },
};

module.exports = resolvers;
