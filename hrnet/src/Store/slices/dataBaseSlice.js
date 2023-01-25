import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataBase: [],
  selected: [],
};

export const dataBaseSlice = createSlice({
  name: 'dataBase',
  initialState,
  reducers: {
    setDataBase: (state, action) => {
      state.dataBase.push(action.payload);
    },

    resetDataBase: () => {
      return initialState;
    },

    setSelected: (state, action) => {
      state.selected = action.payload;
      return state;
    },

    resetSelected: (state) => {
      state.selected = [];
    },
  },
});

export const { setDataBase, resetDataBase, setSelected, resetSelected } =
  dataBaseSlice.actions;

export default dataBaseSlice.reducer;
