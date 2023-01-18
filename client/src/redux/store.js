import { configureStore } from '@reduxjs/toolkit';
import charSlice from './charSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({serializableCheck: false})
export const store = configureStore({
  reducer: {
    charReducer: charSlice
  },
  middleware: customizedMiddleware,
});