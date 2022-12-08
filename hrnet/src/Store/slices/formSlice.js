import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  birthDate: new Date().toLocaleDateString(),
  startDate: new Date().toLocaleDateString(),
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: '',
};

export const form = createSlice({
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

export const { setValue, resetForm } = form.actions;

export default form.reducer;
