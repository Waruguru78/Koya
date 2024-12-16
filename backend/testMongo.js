const mongoose = require('mongoose');

// Connect to MongoDB (using correct database name, KoyaTech)
mongoose.connect('mongodb+srv://Kimaru01:Kimaru01@contact.j9y1f.mongodb.net/KoyaTech?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Connection error:', err));

const testimonialSchema = new mongoose.Schema({
    Name: String,
    Title: String,
    Quote: String
});

// Create the model, ensuring the collection is specified
const Testimonial = mongoose.model('Testimonial', testimonialSchema, 'Testimonials');

const testFetch = async () => {
    try {
        // Log the database and collection name
        console.log('Database Name:', mongoose.connection.name);
        console.log('Collection Name:', Testimonial.collection.name);

        // Query the database for testimonials
        const data = await Testimonial.find();
        console.log('Data fetched:', data);  // Logs the testimonials fetched from MongoDB
    } catch (err) {
        console.error('Error fetching data:', err);
    } finally {
        mongoose.connection.close();
    }
};

testFetch();
