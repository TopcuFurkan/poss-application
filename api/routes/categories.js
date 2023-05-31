const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();


// get operations

router.get('/get-all',async(req,res)=>{
   try {
      const categories = await Category.find();
      res.send(categories);
   } catch (error) {
    console.log(error)
    
   }

})




// post operations
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Kategori başarıyla eklendi.");
  } catch (error) {
    res.status(400).json(error);
  }
});


// update operations

router.put('/update-category', async (req, res) => {
    try {
       await Category.findOneAndUpdate({ _id: req.body._id }, req.body);
       res.status(200).json({ message: "Kategori güncellendi" });
    } catch (error) {
       console.log(error);
       res.status(500).json({ error: "Hata oluştu" });
    }
 });

 //delete operations

 router.delete('/delete-category', async (req, res) => {
    try {
       await Category.findOneAndDelete({ _id: req.body._id });
       res.status(200).json({ message: "Kategori Silindi" });
    } catch (error) {
       console.log(error);
       res.status(500).json({ error: "Hata oluştu" });
    }
 });


module.exports = router;