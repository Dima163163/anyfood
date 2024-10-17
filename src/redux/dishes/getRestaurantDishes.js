import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDisheById } from '.';
import { selectRestaurantById } from '../restaurants';

export const getRestaurantDishes = createAsyncThunk(
  'dishes/getRestaurantDishes',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue('No dishes');
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurant = selectRestaurantById(getState(), restaurantId);

      const { menu } = restaurant;
      for (let menuId of menu) {
        if (!selectDisheById(getState(), menuId)) {
          return true;
        }
      }
      return false;
    }
  }
);
