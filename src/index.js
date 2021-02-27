import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
// deploy
// Project Console: https://console.firebase.google.com/project/whatsapp-clone-97c6d/overview
// Hosting URL: https://whatsapp-clone-97c6d.web.app

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
