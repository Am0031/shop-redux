//will contain references to all resolvers
const login = require("./login");
const { addUser, updateUser, getUser } = require("./users");

const resolvers = {
  Query: { getUser },
  Mutation: {
    login,
    addUser,
    updateUser,
  },
};

module.exports = resolvers;
