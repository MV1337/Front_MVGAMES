import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { GameContextProvider } from "./context/GameContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>
);
