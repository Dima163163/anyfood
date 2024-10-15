import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getRestaurant } from './getRestaurant';

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantId: (state) => state.ids[0],
    selectRestaurantRequestStatus: (state) => state.requestStatus
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurant.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, [payload]);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurant.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
});

export const {
  selectRestaurantById,
  selectRestaurantId,
  selectRestaurantRequestStatus
} = restaurantSlice.selectors;
