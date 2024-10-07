import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './restaurants';
import { reviewsSlice } from './reviews';
import { dishesSlice } from './dishes';
import { usersSlice } from './users';
import { cartSlice } from './ui/cart';

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer
  }
});
