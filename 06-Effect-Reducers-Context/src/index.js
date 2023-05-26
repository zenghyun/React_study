import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import App2 from "./App2";
import { AuthContextProvider } from "./store/auth-context2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App2 />
  </AuthContextProvider>
);
