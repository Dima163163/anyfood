import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReviewsById } from '.';

export const getRestaurantReviews = createAsyncThunk(
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
    condition: (restaurantId, { getState }) => {
      return selectReviewsById(getState(), restaurantId);
    }
  }
);
