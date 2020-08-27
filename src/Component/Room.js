import React from "react";
import defaultImg from "../images/room-1.jpg";
import PropTypes from "prop-types";

const Room = ({ flight }) => {
  console.log(flight);
  const {
    name,
    price,
    arrival,
    departure,
    destination,
    origin,
    images,
  } = flight;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single-room" />
        <div className="price-top">
          <h6>{`${origin} > ${destination}`}</h6>
          <p>${price}</p>
        </div>
        <button className="btn-primary room-link">Book Now</button>{" "}
      </div>
      <p className="room-info">{name}</p>
      <br />
      <p className="room-info">{`arrival:${arrival} depart:${departure}`}</p>
    </article>
  );
};
Room.propTypes = {
  flight: PropTypes.shape({
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
export default Room;
