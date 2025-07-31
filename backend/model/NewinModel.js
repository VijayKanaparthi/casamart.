const mongoose = require("mongoose")

const NewinSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount_price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number, // Use 1 to 5 scale
      required: true,
      min: 1,
      max: 5,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true,
      default: true,
    },
    delivery_time: {
      type: String, // like "2-3 days", "Same day"
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Newin = mongoose.model("Newin", NewinSchema)
module.exports = Newin
