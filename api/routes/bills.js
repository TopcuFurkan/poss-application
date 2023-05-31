const Bill = require("../models/Bill.js");
const express = require("express");
const router = express.Router();


// get operations

router.get('/get-all',async(req,res)=>{
   try {
      const bills = await Bill.find();
      res.send(bills);
   } catch (error) {
    console.log(error)
    
   }

})




// post operations
router.post("/add-bill", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Kategori başarıyla eklendi.");
  } catch (error) {
    res.status(400).json(error);
  }
});


// update operations

router.put('/update-bill', async (req, res) => {
    try {
       await Bill.findOneAndUpdate({ _id: req.body._id }, req.body);
       res.status(200).json({ message: "Kategori güncellendi" });
    } catch (error) {
       console.log(error);
       res.status(500).json({ error: "Hata oluştu" });
    }
 });

 //delete operations

 router.delete('/delete-bill', async (req, res) => {
    try {
       await Bill.findOneAndDelete({ _id: req.body._id });
       res.status(200).json({ message: "Kategori Silindi" });
    } catch (error) {
       console.log(error);
       res.status(500).json({ error: "Hata oluştu" });
    }
 });


module.exports = router;