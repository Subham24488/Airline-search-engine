import React, { createContext, useState, useEffect } from "react";
import items from "../data";

const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    flights: [],

    price: 0,
    minPrice: 0,
    maxPrice: 0,
    date: "2020-11-05",
    origin: "all",
    destination: "all",
    returnDate: "2020-11-08",
  });

  useEffect(() => {
    let flights = formatData(items);
    let featuredFlights = flights.filter((flight) => flight.featured === true);
    let maxPrice = Math.max(...flights.map((item) => item.price));

    setState({
      ...state,
      flights,
      featuredFlights,
      price: maxPrice,
      maxPrice,
    });
  }, []);

  //Formatting the flights array
  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let flight = { ...item.fields, images, id };
      return flight;
    });
    return tempItems;
  };

  //handlechange
  const handleChange = (event) => {
    const target = event.target;
    const value =
      event.type === "checkbox" ? target.checked === "false" : target.value;
    const name = event.target.name;
    setState({ ...state, [name]: value });
  };

  //filter flights
  const filterFlights = (
    flights,
    price,
    origin,
    destination,
    date,
    returnDate
  ) => {
    console.log(typeof date);
    let tempFlights = [...flights];
    price = parseInt(price);

    //filterBy origin
    if (origin !== "all") {
      tempFlights = tempFlights.filter((flight) => flight.origin === origin);
    }

    //filteredBy destination
    if (origin !== "all") {
      tempFlights = tempFlights.filter(
        (flight) => flight.destination === destination
      );
    }

    // filtered by date
    if (date !== "2020-11-05") {
      tempFlights = tempFlights.filter((flight) => flight.date === date);
    }
    //price
    if (price !== 0) {
      tempFlights = tempFlights.filter((flight) => flight.price <= price);
    }

    return tempFlights;
  };

  console.log(state);
  return (
    <RoomContext.Provider value={{ ...state, handleChange, filterFlights }}>
      {children}
    </RoomContext.Provider>
  );
};

export { RoomProvider, RoomContext };
