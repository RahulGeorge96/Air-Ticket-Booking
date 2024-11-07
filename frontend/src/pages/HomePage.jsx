import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Air Ticket Booking System</h1>
      <p>Login to view and book flights</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register" style={{ marginLeft: "10px" }}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
