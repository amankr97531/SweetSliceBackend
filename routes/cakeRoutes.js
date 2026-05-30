const express = require("express");

const {
  addCake,
  getAllCakes,
  getCakeById,
  updateCake,
  deleteCake,
  getCakesByCategory,
  searchCake,
} = require("../controllers/cakeController");

const router = express.Router();

router.post("/add", addCake);

router.get("/list", getAllCakes);

router.get("/:id", getCakeById);

router.put(
  "/update/:id",
  updateCake
);

router.delete(
  "/delete/:id",
  deleteCake
);

router.get(
  "/category/:categoryId",
  getCakesByCategory
);

router.get(
  "/search",
  searchCake
);

module.exports = router;