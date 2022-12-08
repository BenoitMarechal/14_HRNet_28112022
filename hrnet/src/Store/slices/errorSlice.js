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
  globalValidity: true,
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
        state.firstNameError === false &&
        state.lastNameError === false &&
        state.birthDateError === false &&
        state.startDateError === false &&
        state.streetError === false &&
        state.cityError === false &&
        state.stateError === false &&
        state.zipCodeError === false &&
        state.departmentError === false
      ) {
        state.globalValidity = true;
        return state;
      }
    },
  },
});

export const { setError, resetError, checkGlobalValidity } = errorSlice.actions;

export default errorSlice.reducer;
