import React, { useContext } from "react";
import FlightFilter from "../Component/FlightFilter";
import FlightList from "../Component/FlightList";
import { RoomContext } from "../Context/context";

const Flight = () => {
  const context = useContext(RoomContext);
  console.log(context);
  const {
    filterFlights,
    flights,
    price,
    origin,
    destination,
    date,
    returnDate,
    passenger,
  } = context;
  console.log(flights);

  const filterSortedFlights = filterFlights(
    flights,
    price,
    origin,
    destination,
    date,
    returnDate,
    passenger
  );
  return (
    <>
      <FlightFilter flights={flights} />
      <FlightList flights={filterSortedFlights} />
    </>
  );
};

export default Flight;
