import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './restaurants';
import { reviewsSlice } from './reviews';
import { dishesSlice } from './dishes';
import { usersSlice } from './users';
import { cartSlice } from './ui/cart';
import { apiSlice } from './services/api/api';

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware)
});
