import { configureStore } from '@reduxjs/toolkit';
import dataBaseReducer from './slices/dataBaseSlice';

export const store = configureStore({
  reducer: { dataBaseReducer },
});
