const bookingSchema = new mongoose.Schema({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: "Trip" },
  type: {
    type: String,
    enum: ["Flight", "Hotel", "Car Rental", "Activity"],
    required: true,
  },
  provider: String,
  bookingDate: { type: Date, required: true },
  price: { type: Number, required: true },
  bookingDetails: String, // This could store flight numbers, hotel confirmation, etc.
});

module.exports = mongoose.model("Booking", bookingSchema);
