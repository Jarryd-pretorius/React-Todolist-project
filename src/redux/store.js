import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./userSlice";
import todoReducer from"./todoSlice";

const store = configureStore({
    reducer: {
        user: useReducer,
        todos: todoReducer
    },
});

export default store;