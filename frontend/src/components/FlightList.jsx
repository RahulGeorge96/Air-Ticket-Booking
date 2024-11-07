import  { useEffect, useState } from "react";
import { fetchFlights } from "../api/flights";
import FlightCard from "./FlightCard";
import { Grid, Container } from "@mui/material";

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const getFlights = async () => {
      const response = await fetchFlights();
     setFlights(response.data);
    };
    getFlights();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {flights.map((flight) => (
          <Grid item key={flight._id} xs={12} sm={6} md={4}>
            <FlightCard flight={flight} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FlightList;
