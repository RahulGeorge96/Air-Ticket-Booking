import React, { useState } from "react";
import { createBooking } from "../api/bookings";

const FlightCard = ({ flight }) => {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = async () => {
    try {
      const bookingData = await createBooking(flight.departure, flight.arrival);
      console.log("Booking successful", bookingData);
      setIsBooked(true); // Update the state to reflect the booking
    } catch (error) {
      console.error("Booking failed", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div>
      <h3>{flight.airline}</h3>
      <p>Flight No: {flight.flightNo}</p>
      <p>Departure: {flight.departure}</p>
      <p>Arrival: {flight.arrival}</p>
      <p>Price: ${flight.price}</p>
      <button onClick={handleBooking} disabled={isBooked}>
        {isBooked ? "Booked" : "Book"}
      </button>
    </div>
  );
};

export default FlightCard;
