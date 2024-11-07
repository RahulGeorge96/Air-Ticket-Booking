import  { useEffect, useState } from "react";
import { fetchBookings } from "../api/bookings";

const BookingList = ({ token }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      const { data } = await fetchBookings(token);
      setBookings(data);
    };
    getBookings();
  }, [token]);

  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking._id}>
          <p>Booking ID: {booking._id}</p>
          <p>Flight: {booking.flight.flightNo}</p>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
