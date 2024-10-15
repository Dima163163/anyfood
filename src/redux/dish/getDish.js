import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDisheId } from '.';

export const getDish = createAsyncThunk(
  'dish/getDish',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${id}`);

    const result = await response.json();

    if (!Object.keys(result).length) {
      rejectWithValue('No dish');
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectDisheId(getState());
    }
  }
);
