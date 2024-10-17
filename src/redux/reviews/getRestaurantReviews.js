import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReviewById } from '.';

export const getRestaurantReview = createAsyncThunk(
  'reviews/getRestaurantReviews',
  async (reviewId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${reviewId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue('No reviews');
      return;
    }

    return result;
  },
  {
    condition: (reviewId, { getState }) => {
      return selectReviewById(getState(), reviewId);
    }
  }
);
