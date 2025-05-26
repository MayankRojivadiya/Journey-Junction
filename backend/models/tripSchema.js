const tripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination" },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
  notes: String,
  status: {
    type: String,
    enum: ["Planned", "Completed", "Cancelled"],
    default: "Planned",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Trip", tripSchema);
