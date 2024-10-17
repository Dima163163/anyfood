import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReviewsById } from '.';

export const getRestaurantReview = createAsyncThunk(
  'reviews/getRestaurantReviews',
  async (rewiewId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${rewiewId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue('No reviews');
      return;
    }

    return result;
  },
  {
    condition: (rewiewId, { getState }) => {
      return selectReviewsById(getState(), rewiewId);
    }
  }
);
