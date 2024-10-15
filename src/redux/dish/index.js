import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getDish } from './getDish';

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectDisheId: (state) => state.ids[0],
    selectDisheById: (state, id) => state.entities[id],
    selectDisheRequestStatus: (state) => state.requestStatus
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDish.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, [payload]);
        state.requestStatus = FULFILLED;
      })
      .addCase(getDish.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
});

export const { selectDisheId, selectDisheById, selectDisheRequestStatus } =
  dishSlice.selectors;
