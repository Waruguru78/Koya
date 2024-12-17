const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// Initialize environment variables (optional, if you're using .env file)
dotenv.config();

// Middleware
app.use(cors(){origin: 'http://localhost:3000'}); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://Kimaru01:Kimaru01@contact.j9y1f.mongodb.net/KoyaTech?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);  // Exit the app if the connection fails
  });

// ----------------- Schemas and Models ----------------- //

// Testimonial schema and model
const testimonialSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Title: { type: String, required: true },
  Quote: { type: String, required: true }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema, 'Testimonials');

// Course schema and model
const courseSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Duration: { type: String, required: true }
});

const Course = mongoose.model('Course', courseSchema, 'Courses');

// Event schema and model
const eventSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Date: { type: String, required: true }
});

const Event = mongoose.model('Event', eventSchema, 'Events');

// ----------------- API Routes ----------------- //

// Fetch all testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    console.log('Fetching testimonials...');
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ error: 'Error fetching testimonials' });
  }
});

// Fetch all courses
app.get('/api/courses', async (req, res) => {
  try {
    console.log('Fetching courses...');
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Error fetching courses' });
  }
});

// Fetch all events
app.get('/api/events', async (req, res) => {
  try {
    console.log('Fetching events...');
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Error fetching events' });
  }
});

app.get('/api/events/:id', async (req, res) => {
  const { id } = req.params;

  // Check if the ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  try {
    console.log(`Fetching event with ID: ${id}`);
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: 'Error fetching event' });
  }
});


// ----------------- Start the Server ----------------- //
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
