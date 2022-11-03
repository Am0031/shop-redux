// import { createStore } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

export default store = configureStore(reducers);
