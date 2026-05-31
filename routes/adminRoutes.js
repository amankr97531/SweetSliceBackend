const express = require("express");

const {
  dashboardCounts,
} = require(
  "../controllers/adminController"
);

const router =
express.Router();

router.get(
  "/dashboard",
  dashboardCounts,
);

module.exports = router;