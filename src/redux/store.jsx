import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import formReducer from "./slices/formSlice";

const store=configureStore({
    reducer:{
        products:productReducer,
        form:formReducer
    }
});

export default store;