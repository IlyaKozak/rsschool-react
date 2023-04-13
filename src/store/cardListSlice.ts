import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SLICE } from '../constants/store';
import { MiniCard } from '../types/miniCard';
import { ResponseData } from '../types/responseData';

const cardListSlice = createSlice({
  name: SLICE.cardList,
  initialState: { cardList: [] as MiniCard[], responseData: [] as ResponseData[] },
  reducers: {
    setCards(state, action: PayloadAction<MiniCard[]>) {
      state.cardList = action.payload;
    },
    setResonseData(state, action: PayloadAction<ResponseData[]>) {
      state.responseData = action.payload;
    },
  },
});

export const cardListActions = cardListSlice.actions;

export default cardListSlice;
