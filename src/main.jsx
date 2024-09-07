import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import store, { persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./main.scss";
import { getAbout } from "./redux/actions/about.action.js";
import { getParcours } from "./redux/actions/parcours.action.js";

store.dispatch(getAbout());
store.dispatch(getParcours());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
