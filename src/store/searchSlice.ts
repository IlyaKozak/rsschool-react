import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SLICE } from '../constants/store';

const searchSlice = createSlice({
  name: SLICE.search,
  initialState: { searchValue: '' },
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
