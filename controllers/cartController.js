const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  try {
    const {
      userId,
      cakeId,
      weight,
      quantity,
      flavor,
      customMessage,
    } = req.body;

    const cart = await Cart.create({
      userId,
      cakeId,
      weight,
      quantity,
      flavor,
      customMessage,
    });

    res.status(201).json({
      success: true,
      message: "Added to cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCartByUser = async (req, res) => {
  try {
    const carts = await Cart.find({
      userId: req.params.userId,
    })
      .populate("cakeId")
      .populate("userId", "name email");

    res.status(200).json({
      success: true,
      carts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Item removed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCartByUser,
  removeCartItem,
};