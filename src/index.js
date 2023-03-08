import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./reset.css";
import "./variables.css";
import "./typography.css";
import "./index.css";

import MainProvider from "./contexts/provider";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </MainProvider>
  </React.StrictMode>
);
