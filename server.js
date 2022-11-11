const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// local imports
const userRoutes = require("./routes/userRoutes");

// configurations
const app = express();
dotenv.config();

connectDB();
const PORT = process.env.PORT || 5000;

// routes

app.use("/", userRoutes);

// listener
app.listen(PORT, console.log(`Server running on port: ${PORT}`));
