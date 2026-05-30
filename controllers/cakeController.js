const Cake = require("../models/Cake");

const addCake = async (req, res) => {
  try {
    const {
      cakeName,
      description,
      categoryId,
      price500gm,
      price1kg,
      price2kg,
      image,
      flavors,
    } = req.body;

    const cake = await Cake.create({
      cakeName,
      description,
      categoryId,
      price500gm,
      price1kg,
      price2kg,
      image,
      flavors,
    });

    res.status(201).json({
      success: true,
      message: "Cake added successfully",
      cake,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllCakes = async (req, res) => {
  try {
    const cakes = await Cake.find()
      .populate("categoryId", "categoryName")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      cakes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCakeById = async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id)
      .populate("categoryId", "categoryName");

    if (!cake) {
      return res.status(404).json({
        success: false,
        message: "Cake not found",
      });
    }

    res.status(200).json({
      success: true,
      cake,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCake = async (req, res) => {
  try {
    const cake = await Cake.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!cake) {
      return res.status(404).json({
        success: false,
        message: "Cake not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cake updated successfully",
      cake,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCake = async (req, res) => {
  try {
    const cake = await Cake.findByIdAndDelete(
      req.params.id
    );

    if (!cake) {
      return res.status(404).json({
        success: false,
        message: "Cake not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cake deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCakesByCategory = async (req, res) => {
  try {
    const cakes = await Cake.find({
      categoryId: req.params.categoryId,
    }).populate(
      "categoryId",
      "categoryName"
    );

    res.status(200).json({
      success: true,
      cakes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const searchCake = async (req, res) => {
  try {
    const search = req.query.q;

    const cakes = await Cake.find({
      cakeName: {
        $regex: search,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      cakes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



module.exports = {
  addCake,
  getAllCakes,
  getCakeById,
  updateCake,
  deleteCake,
  getCakesByCategory,
  searchCake,
};