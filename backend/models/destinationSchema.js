const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  location: {
    country: String,
    city: String,
    coordinates: { type: { type: String }, coordinates: [Number] },
  },
  images: [String],
  popularAttractions: [String],
  bestSeason: String,
  averageCost: Number,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("Destination", destinationSchema);
