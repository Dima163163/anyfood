import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getRestaurantReviews } from './getRestaurantReviews';

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
    selectReviewsRequestStatus: (state) => state.requestStatus
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurantReviews.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurantReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurantReviews.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
});

export const {
  selectReviewById,
  selectReviewsRequestStatus,
  selectReviewsIds
} = reviewsSlice.selectors;
