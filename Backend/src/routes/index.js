//This will hold all the base names for each route 
const express = require("express")

const router = express.Router()

//This holds all the routes related to user
const userRoutes = require("../domains/users")

//This holds all the routes related to products
const productRoutes = require("../domains/products")

//Use the user-related routes
router.use("/user" , userRoutes)

//Use the product-related routes
router.use("/products" , productRoutes)

module.exports = router