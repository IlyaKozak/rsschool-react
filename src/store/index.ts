import { configureStore } from '@reduxjs/toolkit';

import formSlice from './formSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    form: formSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
