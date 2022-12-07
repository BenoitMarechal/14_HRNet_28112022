import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  birthDate: new Date(),
  startDate: new Date(),
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setValue: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => {
      return initialState;
    },
  },
});

export const { setValue, resetForm } = formSlice.actions;

export default formSlice.reducer;
