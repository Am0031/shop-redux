const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const updateUser = async (parent, args, context) => {
  if (context.user) {
    return await User.findByIdAndUpdate(context.user._id, args, { new: true });
  }

  throw new AuthenticationError("Not logged in");
};

const user = async (parent, args, context) => {
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
  updateUser,
  user,
};
