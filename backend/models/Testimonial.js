const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Title: { type: String, required: true },
    Quote: { type: String, required: true }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
