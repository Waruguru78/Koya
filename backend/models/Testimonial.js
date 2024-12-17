const mongoose = require('mongoose');

// Testimonial schema model
const testimonialSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Title: { type: String, required: true },
  Quote: { type: String, required: true },
});

// Export the Testimonial model
module.exports = mongoose.model('Testimonial', testimonialSchema);
