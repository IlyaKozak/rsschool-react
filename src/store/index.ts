import * as toolkitRaw from '@reduxjs/toolkit';

import searchSlice from './searchSlice';
import formSlice from './formSlice';
import { openLibraryApi } from '../services/openLibraryApi';
import { TypeToolkitRaw } from '../types/toolkitRaw';

const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

export const rootReducer = combineReducers({
  search: searchSlice.reducer,
  form: formSlice.reducer,
  [openLibraryApi.reducerPath]: openLibraryApi.reducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openLibraryApi.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
