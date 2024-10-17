import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReviewById } from '.';
import { selectRestaurantById } from '../restaurants';

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
    condition: (restaurantId, { getState }) => {
      const restaurant = selectRestaurantById(getState(), restaurantId);
      const { reviews } = restaurant;

      for (let reviewId of reviews) {
        if (!selectReviewById(getState(), reviewId)) {
          return true;
        }
      }
      return false;
    }
  }
);
