import React, { useContext, useState } from "react";
import { RoomContext } from "../Context/context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const FlightFilter = ({ flights }) => {
  const [isOpean, setisOpean] = useState(false);

  const handleToggle = () => {
    setisOpean(!isOpean);
  };

  const context = useContext(RoomContext);
  const {
    handleChange,
    origin,
    destination,
    price,
    date,
    returnDate,
    minPrice,
    maxPrice,
  } = context;
  //removing similar elements in origin
  let origins = getUnique(flights, "origin");

  origins = ["all", ...origins];
  origins = origins.map((item, index) => {
    return (
      <option vlaue={item} key={index}>
        {item}
      </option>
    );
  });

  //removing similar elements in destination
  let destinations = getUnique(flights, "destination");
  destinations = ["all", ...destinations];
  destinations = destinations.map((item, index) => {
    return (
      <option vlaue={item} key={index}>
        {item}
      </option>
    );
  });
  //dates
  let dates = flights.map((item, index) => item.date);

  return (
    <section className="filter-container">
      <Title title="Search Flights" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <select
            name="origin"
            id="origin"
            value={origin}
            className="form-control"
            onChange={handleChange}
          >
            {origins}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="destination">destination</label>
          <select
            name="destination"
            id="destination"
            value={destination}
            className="form-control"
            onChange={handleChange}
          >
            {destinations}
          </select>
        </div>
        {!isOpean ? (
          <div className="form-group">
            <label htmlFor="destination">departure date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              min="2020-12-01"
              max="2020-12-16"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {isOpean ? (
          <div className={`form-group`}>
            <label htmlFor="destination">return date</label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={date}
              min="2020-12-01"
              max="2020-12-16"
              onChange={handleChange}
            />
          </div>
        ) : null}
        <div className="form-group">
          <label htmlFor="destination">passenger</label>
          <select name="passenger" id="destination" className="form-control">
            <option>1</option> <option>2</option> <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="returnPlan"
              id="returnPlan"
              onChange={handleToggle}
            />
            <label htmlFor="returnPlan">ReturnPlan</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FlightFilter;
