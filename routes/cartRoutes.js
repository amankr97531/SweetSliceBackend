const express = require("express");

const {
  addToCart,
  getCartByUser,
  removeCartItem,
  clearCart,
} = require("../controllers/cartController");

const router = express.Router();

router.post("/add", addToCart);

router.get("/user/:userId", getCartByUser);

router.delete("/remove/:id", removeCartItem);

router.delete(
  "/clear/:userId",
  clearCart
);

module.exports = router;
