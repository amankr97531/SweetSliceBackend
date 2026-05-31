const express = require("express");

const {
  getUsers,
  deleteUser,
} = require(
  "../controllers/userController"
);

const router =
express.Router();

router.get(
  "/list",
  getUsers,
);

router.delete(
  "/delete/:id",
  deleteUser,
);

module.exports = router;