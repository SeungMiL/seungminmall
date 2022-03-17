const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// 상품 생성(관리자)

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 상품수정(관리자)

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 상품삭제(관리자)

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("상품이 삭제 되었습니다");
  } catch (err) {
    res.status(500).json(err);
  }
});

// 상품 가져오기(관리자)

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 상품(전체) 가져오기(관리자)

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 유저 날짜별 통계(관리자)

// router.get("/stats", verifyTokenAndAdmin, async(req,res)=>{
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try{
//         const data = await User.aggregate([
//             {$match: {createdAt: { $gte: lastYear }}},
//             {
//                 $project:{
//                     month: { $month: "$createdAt"}
//                 },
//             },
//             {
//                 $group:{
//                     _id: "$month",
//                     total:{$sum:1},
//                 },
//             },
//         ]);
//         res.status(200).json(data)
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// })

module.exports = router;
