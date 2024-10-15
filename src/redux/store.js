import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './restaurants';
import { reviewsSlice } from './reviews';
import { dishesSlice } from './dishes';
import { usersSlice } from './users';
import { cartSlice } from './ui/cart';
import { restaurantSlice } from './restaurant';
import { dishSlice } from './dish';

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer
  }
});
