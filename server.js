
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const connectDB = require("./config/db");
require("dotenv").config();
const express = require("express");
const appointment = require("./config/models/appointment");
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:",process.env.PORT);

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointments)

console.log("Starting server...");

connectDB()
    .then(() => console.log("MongoDB connection function executed."))
    .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("MediCare API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
console.error('MongoDB connection error: $ {err.message}');


