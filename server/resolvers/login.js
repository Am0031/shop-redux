const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User } = require("../models");

const login = async (parent, { email, password }) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError("Incorrect credentials");
    }

    const correctPw = await user.checkPassword(password);

    if (!correctPw) {
      throw new AuthenticationError("Incorrect credentials");
    }

    const token = signToken(user);

    return { success: true, token, user };
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);

    throw new AuthenticationError("Failed to login");
  }
};

module.exports = login;
