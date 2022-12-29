import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    close: (state) => {
      state.open = false;
      return { state };
    },
    open: (state) => {
      state.open = true;
      return { state };
    },
    toggleOpen: (state) => {
      state.open = !state.open;
      return { state };
    },
  },
});

export const { open, close, toggleOpen } = modalSlice.actions;

export default modalSlice.reducer;
