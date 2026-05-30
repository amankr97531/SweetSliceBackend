const express = require("express");

const {
  placeOrder,
  getOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/place", placeOrder);

router.get("/list", getOrders);

router.put(
  "/status/:id",
  updateOrderStatus
);

module.exports = router;