const express = require("express");

const {
  addToCart,
  getCartByUser,
  removeCartItem,
} = require("../controllers/cartController");

const router = express.Router();

router.post("/add", addToCart);

router.get("/user/:userId", getCartByUser);

router.delete("/remove/:id", removeCartItem);

module.exports = router;