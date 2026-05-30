const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        cakeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Cake",
        },

        cakeName: String,

        weight: String,

        quantity: Number,

        flavor: String,

        customMessage: String,

        price: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      default: "UPI",
    },

    orderStatus: {
      type: String,
      enum: [
        "Pending",
        "Accepted",
        "Preparing",
        "Out For Delivery",
        "Delivered",
        "Cancelled",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);