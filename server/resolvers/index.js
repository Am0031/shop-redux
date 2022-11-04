//will contain references to all resolvers
const login = require("./login");
const { addUser, updateUser, getUser } = require("./users");
const { getProduct, getProducts, updateProduct } = require("./products");

const resolvers = {
  Query: { getUser, getProduct, getProducts },
  Mutation: {
    login,
    addUser,
    updateUser,
    updateProduct,
  },
};

module.exports = resolvers;
