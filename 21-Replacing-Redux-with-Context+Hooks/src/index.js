import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import ProductsProvider from "./context/products-context";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureStore from "./hooks-store/products-store";
// import productReducer from "./store/reducers/products";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ProductsProvider>
);
