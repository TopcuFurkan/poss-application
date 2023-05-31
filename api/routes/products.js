const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();


// get operations

router.get('/get-all',async(req,res)=>{
   try {
      const products = await Product.find();
      res.send(products);
   } catch (error) {
    console.log(error)
    
   }

})




// post operations
router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("Ürün başarıyla eklendi.");
  } catch (error) {
    res.status(400).json(error);
  }
});


// update operations

router.put('/update-product', async (req, res) => {
    try {
       await Product.findOneAndUpdate({ _id: req.body._id }, req.body);
       res.status(200).json({ message: "Kategori güncellendi" });
    } catch (error) {
       console.log(error);
       res.status(500).json({ error: "Hata oluştu" });
    }
 });

 //delete operations

 router.delete('/delete-product', async (req, res) => {
    try {
       await Product.findOneAndDelete({ _id: req.body._id });
       res.status(200).json({ message: "Kategori Silindi" });
    } catch (error) {
       console.log(error);
       res.status(500).json({ error: "Hata oluştu" });
    }
 });


module.exports = router;