import React from "react";
import Room from "./Room";

const FlightList = ({ flights }) => {
  if (flights.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no flights matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {flights.map((item) => {
          return <Room key={item.id} flight={item} />;
        })}
      </div>
    </section>
  );
};

export default FlightList;
