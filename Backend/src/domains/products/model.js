const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Rating: {
    type: Number,
    default: 5,
  },
  Picture: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: new Date(Date.now()),
  }

});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
