import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReviews } from '.';

export const getRestaurantReview = createAsyncThunk(
  'reviews/getRestaurantReviews',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
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
      return selectReviews(getState(), reviewId);
    }
  }
);
