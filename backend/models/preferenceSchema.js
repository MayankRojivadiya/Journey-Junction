const preferencesSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  travelType: {
    type: String,
    enum: ["Adventure", "Relaxation", "Cultural", "Business"],
  },
  budget: Number,
  preferredCountries: [String],
  preferredSeason: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Preferences", preferencesSchema);
