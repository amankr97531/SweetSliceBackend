const User = require("../models/User");

const getUsers = async (req,res)=>{

  try{

    const users =
    await User.find()
    .sort({createdAt:-1});

    res.status(200).json({

      success:true,

      users,
    });

  }catch(error){

    res.status(500).json({

      success:false,

      message:error.message,
    });
  }
};

const deleteUser =
async(req,res)=>{

  try{

    await User.findByIdAndDelete(
      req.params.id,
    );

    res.status(200).json({

      success:true,

      message:
      "User Deleted",
    });

  }catch(error){

    res.status(500).json({

      success:false,

      message:
      error.message,
    });
  }
};

module.exports = {
  getUsers,
  deleteUser,
};