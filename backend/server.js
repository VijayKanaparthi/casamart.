require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

// Import the Newin model
const Newin = require("./model/NewinModel")
const Clothing = require("./model/Clothing")

const app = express()
app.use(cors())
app.use(express.json())

// NEWIN SECTION
app.post("/newin", async (req, res) => {
  try {
    const newinData = req.body
    const newNewin = await Newin.insertMany(newinData)

    return res.status(201).json({
      success: true,
      message: "Succuesfully Loaded...",
      data: newNewin,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create new item",
      error: error.message,
    })
  }
})

app.get("/newin", async (req, res) => {
  try {
    const newinItems = await Newin.find()
    return res.status(200).json({
      success: true,
      message: "Successfully fetched items",
      data: newinItems,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch items",
      error: error.message,
    })
  }
})
// GET Product Details
app.get("/newin/:id/", async (req, res) => {
  try {
    const { id } = req.params
    const product = await Newin.findById({ _id: id })
    return res.status(200).json({
      success: true,
      message: "Successfully fetched item",
      data: product,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch item",
      error: error.message,
    })
  }
})

// CLOTHING SECTION
app.post("/cloths", async (req, res) => {
  try {
    const clothData = req.body
    const loadedClothData = await Clothing.insertMany(clothData)
    return res.status(200).json({
      success: true,
      message: "Succuesfully Loaded...",
      data: loadedClothData,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create New Cloth Item",
      error: error.message,
    })
  }
})

app.get("/cloths", async (req, res) => {
  try {
    const clothsData = await Clothing.find({})
    return res.status(200).json({
      success: true,
      message: "Successfully fetched items",
      data: clothsData,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch items",
      error: error.message,
    })
  }
})

app.get("/cloths/:id/", async (req, res) => {
  try {
    const { id } = req.params
    const product = await Clothing.findById({ _id: id })
    return res.status(200).json({
      success: true,
      message: "Successfully fetched item",
      data: product,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch item",
      error: error.message,
    })
  }
})

// ALL PRODUCTS
app.get("/all-products", async (req, res) => {
  try {
    const newInProducts = await Newin.find()
    const clothingProducts = await Clothing.find()

    // Add source to each
    const newInWithSource = newInProducts.map((item) => ({
      ...item.toObject(),
      source: "newin",
    }))

    const clothingWithSource = clothingProducts.map((item) => ({
      ...item.toObject(),
      source: "clothing",
    }))

    const allProducts = [...newInWithSource, ...clothingWithSource]

    res.status(200).json({
      success: true,
      message: "Successfully fetched items",
      data: allProducts,
    })
  } catch (error) {
    console.error("Error fetching products:", error)
    res.status(500).json({ success: false, error: "Server Error" })
  }
})

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} && connected to MongoDB`)
    })
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  })
