import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import subjectsReducer from './slices/subjectSlice';

const rootReducer = combineReducers({
  subjectsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export function setupStore(
  preloadedState?: PreloadedState<RootState>
): AppStore {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof configureStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
