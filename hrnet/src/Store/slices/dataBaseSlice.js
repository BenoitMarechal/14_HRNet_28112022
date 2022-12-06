import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataBase: [],
};

export const dataBaseSlice = createSlice({
  name: 'dataBase',
  initialState,
  reducers: {
    setDataBase: (state, action) => {
      state.dataBase.push(action.payload);
    },

    resetDataBase: (state) => {
      return initialState;
    },
  },
});

export const { setDataBase, resetDataBase } = dataBaseSlice.actions;

export default dataBaseSlice.reducer;
