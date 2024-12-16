const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Testimonial = require('./models/Testimonial'); // Assuming your model is in the 'models' folder

// Initialize environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Allow CORS
app.use(express.json()); // Parse JSON bodies

// MongoDB connection string from environment variables
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://Kimaru01:Kimaru01@contact.j9y1f.mongodb.net/contact?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Testimonial schema model
const testimonialSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Title: { type: String, required: true },
  Quote: { type: String, required: true },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// API endpoint to fetch testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);  // Send the testimonials data to the frontend
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ error: 'Error fetching testimonials' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
