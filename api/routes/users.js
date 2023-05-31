const User = require("../models/User.js");
const express = require("express");
const router = express.Router();


// get operations

router.get('/get-all',async(req,res)=>{
   try {
      const users = await User.find();
      res.send(users);
   } catch (error) {
    console.log(error)
    
   }

})




module.exports = router;