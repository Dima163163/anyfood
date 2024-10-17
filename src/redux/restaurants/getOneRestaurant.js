import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantById } from '.';

export const getOneRestaurant = createAsyncThunk(
  'restaurants/getOneRestaurant',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );

    const result = await response.json();

    if (!result.name) {
      rejectWithValue('No restaurant');
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return selectRestaurantById(getState(), restaurantId);
    }
  }
);
