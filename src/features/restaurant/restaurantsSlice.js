// Action Creators
export function addRestaurant(restaurant) {
  return {
    type: "restaurants/add",
    payload: restaurant,
  };
}

export function removeRestaurant(restaurant) {
  return {
    type: "restaurants/remove",
    payload: restaurant
  }
}

// Reducer
const initialState = {
  restaurants: [],
};

export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case "restaurants/add":
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload],
      };

    case "restaurants/remove":
      return {
        ...state,
        restaurants: state.restaurants.filter(restaurant => restaurant !== action.payload)
      }

      default:
        return state;
  }
}