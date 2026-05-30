const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    cakeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cake",
      required: true,
    },

    weight: {
      type: String,
      enum: ["500gm", "1kg", "2kg"],
      required: true,
    },

    quantity: {
      type: Number,
      default: 1,
    },

    customMessage: {
      type: String,
      default: "",
    },

    flavor: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);