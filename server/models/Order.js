const { Schema, model } = require("mongoose");

const orderSchema = {
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
};

const schema = new Schema(orderSchema, {
  _id: false,
});

const Order = model("Order", schema);

module.exports = Order;
