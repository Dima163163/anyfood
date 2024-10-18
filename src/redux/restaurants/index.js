import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './getRestaurants';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getOneRestaurant } from './getOneRestaurant';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    requestStatusOneRestaurant: IDLE
  }),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurants: (state) => state.entities,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsRequestStatus: (state) => state.requestStatus,
    selectOneRestaurantRequestStatus: (state) =>
      state.requestStatusOneRestaurant
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(getOneRestaurant.pending, (state) => {
        state.requestStatusOneRestaurant = PENDING;
      })
      .addCase(getOneRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
        state.requestStatusOneRestaurant = FULFILLED;
      })
      .addCase(getOneRestaurant.rejected, (state) => {
        state.requestStatusOneRestaurant = REJECTED;
      })
});

export const {
  selectRestaurantsIds,
  selectRestaurantById,
  selectRestaurants,
  selectRestaurantsRequestStatus,
  selectOneRestaurantRequestStatus
} = restaurantsSlice.selectors;
