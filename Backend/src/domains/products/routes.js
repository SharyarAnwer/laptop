// This will hold all the particular routes related to users

const express = require("express");

const router = express.Router();

const Product = require("./model");

router.post("/add-product", async (req, res) => {
  try {
    // Extract picture details from the request body
    let { Name, Quantity, Category, Price, Rating, Picture, Description } =
      req.body;

    let response = await Product.create({
      Name,
      Quantity,
      Category,
      Price,
      Rating,
      Picture,
      Description,
    });

    res
      .status(200)
      .json({ message: "Product created successfully", response: response });
  } catch (error) {
    res.status(201).json({
      message: "There was some problem in creating the product",
      error: error,
    });
  }
});

router.post("/get-product", async (req, res) => {
  try {
    // Extract product category (if it exists) from the request body
    let response;

    if (req.body.Category != null) {
      response = await Product.find({ Category: req.body.Category });
    } else {
      response = await Product.find();
    }

    res.status(200).json({
      message: "Product found successfully",
      response: response,
    });
  } catch (error) {
    res.status(201).json({
      message: "There was some problem in creating the product",
      error: error,
    });
  }
});

router.get("/get-new-products", async (req, res) => {

  // This fetches data which was added maximum one week ago
  try {

    const oneWeekAgo = new Date();

    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const recentProducts = await Product.find({
      CreatedAt: {
        $gte: oneWeekAgo.toISOString(),
        $lte: new Date().toISOString(),
      },
    }).limit(4)

    res.json({ response: recentProducts });

  } catch (error) {

    res
      .status(500)
      .json({ error: "An error occurred while fetching recent products." });

  }
});

module.exports = router;
