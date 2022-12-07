import { configureStore } from '@reduxjs/toolkit';
import dataBaseReducer from './slices/dataBaseSlice';
import formSliceReducer from './slices/formSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  dataBaseReducer,
  formSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  formSliceReducer,

  middleware: [thunk],
});

export default store;
