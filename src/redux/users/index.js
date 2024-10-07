import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../materials/normalized-mock';

const initialState = {
  enteties: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id)
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.enteties[id]
  }
});

export const { selectUsersIds, selectUserById } = usersSlice.selectors;
