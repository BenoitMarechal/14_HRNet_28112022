import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfRows: 10,
  numberOfPages: 1,
  activePage: 1,
  filter: '',
  begin: 0,
  end: 9,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPagination: (state, action) => {
      return { ...state, ...action.payload };
    },

    resetPagination: (state) => {
      return initialState;
    },
  },
});

export const { setPagination, resetPagination } = paginationSlice.actions;

export default paginationSlice.reducer;
