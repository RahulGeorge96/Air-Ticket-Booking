const Flight = require("../models/flightModel");

const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFlight = async (req, res) => {
  const {
    airline,
    flightNo,
    departure,
    arrival,
    departureTime,
    arrivalTime,
    seats,
    price,
  } = req.body;

  try {
    const flight = new Flight({
      airline,
      flightNo,
      departure,
      arrival,
      departureTime,
      arrivalTime,
      seats,
      price,
    });
    await flight.save();
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }
    res.status(202).json({ message: "Flight deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFlights,
  getFlightById,
  createFlight,
  updateFlight,
  deleteFlight,
};
