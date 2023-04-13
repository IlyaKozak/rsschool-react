import { configureStore } from '@reduxjs/toolkit';

import searchSlice from './searchSlice';
import formSlice from './formSlice';
import { openLibraryApi } from '../services/openLibraryApi';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    form: formSlice.reducer,
    [openLibraryApi.reducerPath]: openLibraryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openLibraryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
