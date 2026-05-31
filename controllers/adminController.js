const User = require("../models/User");
const Order = require("../models/Order");
const Cake = require("../models/Cake");
const Category = require("../models/Category");

const dashboardCounts =
async (req,res)=>{

  try{

    const totalUsers =
    await User.countDocuments();

    const totalOrders =
    await Order.countDocuments();

    const totalCakes =
    await Cake.countDocuments();

    const totalCategories =
    await Category.countDocuments();

    res.status(200).json({

      success:true,

      totalUsers,

      totalOrders,

      totalCakes,

      totalCategories,
    });

  }catch(error){

    res.status(500).json({

      success:false,

      message:error.message,
    });
  }
};

module.exports = {
  dashboardCounts,
};