import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDisheById } from '.';

export const getRestaurantOneDish = createAsyncThunk(
  'dishes/getRestaurantOneDish',
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

    const result = await response.json();

    if (!result.name) {
      rejectWithValue('No dish');
      return;
    }

    return result;
  },
  {
    condition: (dishId, { getState }) => {
      return selectDisheById(getState(), dishId);
    }
  }
);
