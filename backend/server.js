require('dotenv').config(); // Load environment variables from .env file

const express = require('express'); // Import express library
const cors = require('cors'); // Import cors middleware
const app = express(); // Create an Express application
const mongoose = require('mongoose'); // Import mongoose library
const Service = require('./model/service'); // Import the Service model

// Configure CORS middleware to allow requests from specified origins
app.use(cors({
    origin: [process.env.localURL, process.env.VERCEL_URL], // Allowed origin(s)
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization' // Allowed headers
}));

app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB using the connection URL from environment variables
mongoose.connect(process.env.mongoURL)
    .then(() => console.log('MongoDB connected...')) // Log success message
    .catch((err) => console.log('MongoDB connection error: ', err)); // Log error message

// Route to create a new service
app.post('/cards', async (req, res) => {
    try {
        const { title, description } = req.body;

        // Create a new service document
        const service = new Service({
            title: title,
            description: description
        });

        await service.save(); // Save the service to the database

        // Respond with success message and created service data
        res.status(201).json({
            message: 'Service created successfully',
            service: service
        });
    } catch (error) {
        // Respond with error message if creation fails
        res.status(500).json({
            message: 'Failed to create service',
            error: error.message
        });
    }
});

// Route to get all services
app.get('/cards', async (req, res) => {
    try {
        const response = await Service.find(); // Fetch all service documents

        // Respond with success message and fetched service data
        res.status(201).json({
            message: 'Service fetched successfully',
            data: response
        });
    } catch (error) {
        // Respond with error message if fetching fails
        res.status(500).json({
            message: 'Failed to fetch service',
            error: error.message
        });
    }
});

// Route to get services filtered by title
app.get('/cards/title', async (req, res) => {
    try {
        const { content } = req.query; // Get search query from request parameters

        const response = await Service.find(); // Fetch all service documents

        // Filter services based on title matching the query content
        const list = response.map((data) => {
            if (data.title.toLowerCase().includes(content.toLowerCase())) {
                return data;
            }
        });

        // Respond with success message and filtered service data
        res.status(201).json({
            message: 'Specific service fetched successfully',
            data: list
        });
    } catch (error) {
        // Respond with error message if fetching fails
        res.status(500).json({
            message: 'Failed to fetch specific service',
            error: error.message
        });
    }
});

// Route for the root path to confirm server is working
app.get('/', (req, res) => {
    res.send('Working...');
});

// Start the server on port 3000
app.listen(3000, (err) => {
    if (err) {
        console.log('There is a problem while starting the server...');
    } else {
        console.log('Server is running successfully...');
    }
});
