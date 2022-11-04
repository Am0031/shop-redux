//will contain references to all resolvers
const login = require("./login");
const { addUser, updateUser, getUser } = require("./users");
const { getProduct, getProducts, updateProduct } = require("./products");
const { getCategories } = require("./categories");
const { getOrder, checkout } = require("./orders");

const resolvers = {
  Query: { getUser, getProduct, getProducts, getCategories, getOrder },
  Mutation: {
    login,
    addUser,
    updateUser,
    updateProduct,
    checkout,
  },
};

module.exports = resolvers;
