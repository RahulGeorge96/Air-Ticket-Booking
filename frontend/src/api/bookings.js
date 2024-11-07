import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;


export const createBooking = async (departure, arrival) => {
  const response = await axios.post(
    `${API_URL}/bookings`,
    { departure, arrival },
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
  return response.data;
};

export const fetchBookings = async () => {
  const response = await axios.get(`${API_URL}/bookings`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};
