import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishesIds } from '.';

export const getDishes = createAsyncThunk(
  'dishes/getDishes',
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${id}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue('No dishes');
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectDishesIds(getState()).length === 0;
    }
  }
);
