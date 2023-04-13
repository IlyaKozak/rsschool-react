import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SLICE } from '../constants/store';
import { Card } from '../types/card';

const formSlice = createSlice({
  name: SLICE.form,
  initialState: { formCards: [] as Card[] },
  reducers: {
    addFormCard(state, action: PayloadAction<Card>) {
      state.formCards.push(action.payload);
    },
  },
});

export const { addFormCard } = formSlice.actions;

export default formSlice;
