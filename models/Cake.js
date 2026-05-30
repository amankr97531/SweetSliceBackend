const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema(
  {
    cakeName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    price500gm: {
      type: Number,
      required: true,
    },

    price1kg: {
      type: Number,
      required: true,
    },

    price2kg: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    flavors: [
      {
        type: String,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cake", cakeSchema);