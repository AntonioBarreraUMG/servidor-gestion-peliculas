const mongoose = require("../config/db");

const FilmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
  },
  genre: {
    type: String,
    required: true,
  },
  plotSummary: {
    type: String,
  },
  posterImage: {
    type: String,
  },
  actors: {
    type: [String],
  },
  releaseDate: {
    type: Date,
  },
  isReleased: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Film", FilmSchema);
