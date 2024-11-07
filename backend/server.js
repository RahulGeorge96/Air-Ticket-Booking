const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); 
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/flights", authMiddleware, flightRoutes);
app.use("/api/booking", authMiddleware, bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
