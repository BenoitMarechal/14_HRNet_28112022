import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './styles/sass/mainSass.scss';
import './input.css';
let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <App />
    </React.StrictMode>
  </Provider>
);
