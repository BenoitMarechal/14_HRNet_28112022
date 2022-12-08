import { configureStore } from '@reduxjs/toolkit';
import dataBaseReducer from './slices/dataBaseSlice';
import formReducer from './slices/formSlice';
import errorReducer from './slices/errorSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  dataBaseReducer,
  formReducer,
  errorReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  formReducer,

  middleware: [thunk],
});

export default store;
