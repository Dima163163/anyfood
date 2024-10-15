import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './getRestaurants';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../constants/constants';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsRequestStatus: (state) => state.requestStatus
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
});

export const {
  selectRestaurantsIds,
  selectRestaurantById,
  selectRestaurantsRequestStatus
} = restaurantsSlice.selectors;
