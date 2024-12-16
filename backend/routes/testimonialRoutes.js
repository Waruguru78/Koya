const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// @route   GET /api/testimonials
// @desc    Fetch all testimonials
router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
