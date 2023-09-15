import React from 'react';
import './index.css';
import App from './App';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <React.StrictMode>
              <App />
          </React.StrictMode>
      </PersistGate>
  </Provider>,
  document.getElementById("root")
);
