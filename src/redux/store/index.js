import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/profile";

const bigReducer = combineReducers({
   user: userReducer,
});

const store = configureStore({
   reducer: bigReducer,
});

export default store;
