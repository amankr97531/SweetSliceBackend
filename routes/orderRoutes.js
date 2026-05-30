const express = require("express");

const {
  placeOrder,
  getOrders,
  updateOrderStatus,
  getUserOrders,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/place", placeOrder);

router.get("/list", getOrders);

router.put(
  "/status/:id",
  updateOrderStatus
);

router.get(
  "/user/:userId",
  getUserOrders
);

module.exports = router;
