import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';

import searchSlice from './searchSlice';
import formSlice from './formSlice';
import { openLibraryApi } from '../services/openLibraryApi';

export const rootReducer = combineReducers({
  search: searchSlice.reducer,
  form: formSlice.reducer,
  [openLibraryApi.reducerPath]: openLibraryApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openLibraryApi.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
