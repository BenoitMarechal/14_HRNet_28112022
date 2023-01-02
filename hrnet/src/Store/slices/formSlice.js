import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
let youngest = moment().subtract(18, 'years').calendar();

const initialState = {
  firstName: '',
  lastName: '',
  birthDate: new Date(youngest).toLocaleDateString(),
  startDate: new Date().toLocaleDateString(),
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: '',
  firstTry: true,
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
