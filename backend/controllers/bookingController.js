const Booking = require("../models/bookingModel");
const Flight = require("../models/flightModel");
// const User = require("../models/userModel");

const createBooking = async (req, res) => {
  // const { flightId } = req.body;
const { departure, arrival } = req.body;
  try {
    // const user = await User.findById(userId);
    // const flight = await Flight.findById(flightId);
    const flight = await Flight.findOne({ departure, arrival });
    if (!user || !flight) {
      return res.status(400).json({ message: "User or Flight not found" });
    }

    const booking = new Booking({ flight: flight._id });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDashboard = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user flight");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(202).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBooking, getDashboard, updateBooking, deleteBooking };
