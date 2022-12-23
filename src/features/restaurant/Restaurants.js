import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRestaurant } from "./restaurantsSlice";

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();

  function handleDeleteRestaurant(restaurant) {
    dispatch(removeRestaurant(restaurant));
  }
  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.name}
            onClick={() => handleDeleteRestaurant(restaurant)}
          >
            {restaurant.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
