const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const addUser = async (parent, args) => {
  const user = await User.create(args);
  const token = signToken(user);

  return { token, user };
};

const updateUser = async (parent, args, context) => {
  if (context.user) {
    return await User.findByIdAndUpdate(context.user._id, args, { new: true });
  }

  throw new AuthenticationError("Not logged in");
};

const getUser = async (parent, args, context) => {
  if (context.user) {
    const user = await User.findById(context.user._id).populate({
      path: "orders.products",
      populate: "category",
    });

    user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    return user;
  }

  throw new AuthenticationError("Not logged in");
};

module.exports = {
  addUser,
  updateUser,
  getUser,
};
