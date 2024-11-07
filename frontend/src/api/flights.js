import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchFlights = async () => {
  return await axios.get(`${API_BASE_URL}/flights`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

