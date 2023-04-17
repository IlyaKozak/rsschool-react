import * as toolkitRaw from '@reduxjs/toolkit';

import { SLICE } from '../constants/store';
import { TypeToolkitRaw } from '../types/toolkitRaw';

const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

const searchSlice = createSlice({
  name: SLICE.search,
  initialState: { searchValue: '', initialSearchInput: '' },
  reducers: {
    setSearchValue(state, action: toolkitRaw.PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setInitialSearchInput(state, action: toolkitRaw.PayloadAction<string>) {
      state.initialSearchInput = action.payload;
    },
  },
});

export const { setSearchValue, setInitialSearchInput } = searchSlice.actions;

export default searchSlice;
