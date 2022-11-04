const { Schema } = require("mongoose");

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

module.exports = schema;
