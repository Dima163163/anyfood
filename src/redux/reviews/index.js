import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getReviews } from './getReviews';

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectReviewsById: (state, id) => state.entities[id],
    selectReviewsRequestStatus: (state) => state.requestStatus
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
});

export const { selectReviewsById, selectReviewsRequestStatus } =
  reviewsSlice.selectors;
