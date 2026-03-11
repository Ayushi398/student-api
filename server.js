const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/students", studentRoutes);
app.get("/", (req, res) => {
    res.send("University Backend API is Running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});