import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SLICE } from '../constants/store';

const searchSlice = createSlice({
  name: SLICE.search,
  initialState: { searchValue: '', initialSearchInput: '' },
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setInitialSearchInput(state, action: PayloadAction<string>) {
      state.initialSearchInput = action.payload;
    },
  },
});

export const { setSearchValue, setInitialSearchInput } = searchSlice.actions;

export default searchSlice;
