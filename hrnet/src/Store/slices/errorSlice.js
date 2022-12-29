import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstNameError: true,
  lastNameError: true,
  birthDateError: true,
  startDateError: true,
  streetError: true,
  cityError: true,
  stateError: true,
  zipCodeError: true,
  departmentError: true,
  globalValidity: false,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetError: () => {
      return initialState;
    },
    checkGlobalValidity: (state) => {
      state.globalValidity = false;
      if (
        state.firstNameError === '' &&
        state.lastNameError === '' &&
        state.birthDateError === '' &&
        state.startDateError === '' &&
        state.streetError === '' &&
        state.cityError === '' &&
        state.stateError === '' &&
        state.zipCodeError === '' &&
        state.departmentError === ''
      ) {
        state.globalValidity = true;
        return state;
      }
    },
  },
});

export const { setError, resetError, checkGlobalValidity } = errorSlice.actions;

export default errorSlice.reducer;
