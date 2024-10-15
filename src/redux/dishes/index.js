import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getDishes } from './getDishes';

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDisheById: (state, id) => state.entities[id],
    selectDishesRequestStatus: (state) => state.requestStatus
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
});

export const { selectDishesIds, selectDisheById, selectDishesRequestStatus } =
  dishesSlice.selectors;
