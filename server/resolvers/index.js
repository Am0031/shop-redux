//will contain references to all resolvers
const { login, addUser } = require("./login");
const { updateUser, getUser } = require("./users");
const { getProduct, getProducts, updateProduct } = require("./products");
const { getCategories } = require("./categories");
const { getOrder, checkout } = require("./orders");

const resolvers = {
  Query: {
    checkout,
    getUser,
    getProduct,
    getProducts,
    getCategories,
    getOrder,
  },
  Mutation: {
    login,
    addUser,
    updateUser,
    updateProduct,
  },
};

module.exports = resolvers;
