import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <WorkoutsContextProvider>
          <App />
        </WorkoutsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
