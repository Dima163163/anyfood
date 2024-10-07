import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../materials/normalized-mock';

const initialState = {
  enteties: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id)
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.enteties[id]
  }
});

export const { selectRestaurantsIds, selectRestaurantById } =
  restaurantsSlice.selectors;
