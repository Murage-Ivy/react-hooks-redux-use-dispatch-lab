import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRestaurant } from "./restaurantsSlice";

function RestaurantInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // add missing code
    dispatch(
      addRestaurant({
        name: name,
        location: location,
      })
    );
    setName( prevState => prevState = "");
    setLocation("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          id="name"
          placeholder="restaurant name"
          value={name}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          id="location"
          placeholder="location"
          value={location}
        />
      </p>
      <button type="submit"> Submit </button>
    </form>
  );
}

export default RestaurantInput;
