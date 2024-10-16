import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantById } from '../restaurants';

export const getRestaurantOneDish = createAsyncThunk(
  'dishes/getRestaurantOneDish',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dish/${restaurantId}`
    );

    const result = await response.json();

    if (!result.name) {
      rejectWithValue('No dish');
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
