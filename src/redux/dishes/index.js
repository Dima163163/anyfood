import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getRestaurantDishes } from './getRestaurantDishes';
import { getRestaurantOneDish } from './getRestaurantOneDish';

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    requestStatusOneDish: IDLE
  }),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDisheById: (state, id) => state.entities[id],
    selectDishesRequestStatus: (state) => state.requestStatus,
    selectOneDisheRequestStatus: (state) => state.requestStatusOneDish
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurantDishes.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurantDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurantDishes.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(getRestaurantOneDish.pending, (state) => {
        state.requestStatusOneDish = PENDING;
      })
      .addCase(getRestaurantOneDish.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
        state.requestStatusOneDish = FULFILLED;
      })
      .addCase(getRestaurantOneDish.rejected, (state) => {
        state.requestStatusOneDish = REJECTED;
      })
});

export const {
  selectDishesIds,
  selectDisheById,
  selectDishesRequestStatus,
  selectOneDisheRequestStatus
} = dishesSlice.selectors;
