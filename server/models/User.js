const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Order = require("./Order");

const userSchema = {
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  orders: [Order.schema],
};

const schema = new Schema(userSchema, { toJSON: { virtuals: true } });

// set up pre-save middleware to create password
schema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
// schema.method("checkPassword", async function (password) {
//   const isValid = await bcrypt.compare(password, this.password);
//   return isValid;
// });

// compare the incoming password with the hashed password
schema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", schema);

module.exports = User;
