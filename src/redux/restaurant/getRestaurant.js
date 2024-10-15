import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantId } from '.';

export const getRestaurant = createAsyncThunk(
  'restaurant/getRestaurant',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/restaurant/${id}`);

    const result = await response.json();

    if (!Object.keys(result).length) {
      rejectWithValue('No restaurant');
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      return selectRestaurantId(getState()) !== id;
    }
  }
);
