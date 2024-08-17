const mongoose = require('mongoose'); // Import mongoose library

// Define the schema for the 'Service' model
const serviceSchema = new mongoose.Schema({
    // Define 'title' as a string field
    title: { type: String },
    // Define 'description' as a string field
    description: { type: String }
});

// Create a model using the defined schema
const Service = mongoose.model('Service', serviceSchema);

// Export the model for use in other parts of the application
module.exports = Service;
