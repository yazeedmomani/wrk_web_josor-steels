import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/index.css";

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
