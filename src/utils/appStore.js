import {configureStore, createReducer} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer:{
        cart:cartReducer,
        //usr:userRegistration
    }
});

export default appStore;