import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import registerServiceWorker from './components/openVidu/registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
