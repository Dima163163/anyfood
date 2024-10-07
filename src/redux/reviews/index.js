import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../materials/normalized-mock';

const initialState = {
  enteties: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id)
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewsById: (state, id) => state.enteties[id]
  }
});

export const { selectReviewsById } = reviewsSlice.selectors;
