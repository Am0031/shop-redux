const { Schema, model } = require("mongoose");

const categorySchema = {
  name: {
    type: String,
    required: true,
    trim: true,
  },
};

const schema = new Schema(categorySchema, { toJSON: { virtuals: true } });

const Category = model("Category", schema);

module.exports = Category;
