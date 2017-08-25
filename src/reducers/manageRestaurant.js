
import cuid from 'cuid';
export const cuidFn = cuid;

let id = 0
let rid = 0

export default function manageRestaurants(state = {
  restaurants: [],
  reviews:[]
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      id++;
      let restaurant = Object.assign({}, action.restaurant, { id: id});
      return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews }
    case 'DELETE_RESTAURANT':
      let restaurants = state.restaurants.filter(restaurant=> restaurant.id !== action.id)
      return {restaurants, reviews: state.reviews}
    case 'ADD_REVIEW':
      rid++;
      let review = Object.assign({}, action.review, { id: rid});
      return { reviews: state.reviews.concat(review), restaurants: state.restaurants }
    case 'DELETE_REVIEW':
      let reviews = state.reviews.filter(review=> review.restaurantId !== action.restaurantId || review.id !== action.id)
      return {reviews, restaurants: state.restaurants}
    default:
      return state;
  }
};
