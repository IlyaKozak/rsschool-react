import * as toolkitRaw from '@reduxjs/toolkit';

import { SLICE } from '../constants/store';
import { Card } from '../types/card';
import { TypeToolkitRaw } from '../types/toolkitRaw';

const { createSlice } = ((toolkitRaw as TypeToolkitRaw)?.default ??
  toolkitRaw) as typeof toolkitRaw;

const formSlice = createSlice({
  name: SLICE.form,
  initialState: { formCards: [] as Card[] },
  reducers: {
    addFormCard(state, action: toolkitRaw.PayloadAction<Card>) {
      state.formCards.push(action.payload);
    },
  },
});

export const { addFormCard } = formSlice.actions;

export default formSlice;
