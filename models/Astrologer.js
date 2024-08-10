const mongoose = require('mongoose');

const AstrologerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: String, required: true },
  experience: { type: Number, required: true },
  details: { type: String, required: true },
});

module.exports = mongoose.model('Astrologer', AstrologerSchema);
