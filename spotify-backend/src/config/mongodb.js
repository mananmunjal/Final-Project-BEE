import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const dbURI = `${process.env.MONGODB_URI}/spotify`; // Complete MongoDB URI with database
        console.log("Connecting to MongoDB with URI:", dbURI); // Log URI to ensure it's correct

        // Connect to MongoDB without the deprecated options
        await mongoose.connect(dbURI);

        mongoose.connection.on('connected', () => {
            console.log("MongoDB connection established to 'spotify' database");
        });

        // Handle connection error
        mongoose.connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("MongoDB connection disconnected");
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        // Optionally, you can exit the process if the connection fails
        // process.exit(1);  
    }
};

export default connectDB;
