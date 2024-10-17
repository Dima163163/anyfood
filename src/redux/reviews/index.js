import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getRestaurantReview } from './getRestaurantReviews';

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviews: (state) => state.entities,
    selectReviewsRequestStatus: (state) => state.requestStatus
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurantReview.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurantReview.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurantReview.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
});

export const { selectReviewById, selectReviewsRequestStatus, selectReviews } =
  reviewsSlice.selectors;
