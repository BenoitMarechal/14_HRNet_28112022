import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Store/counterSlice';

export const store = configureStore({
  reducer: { counterReducer },
});
