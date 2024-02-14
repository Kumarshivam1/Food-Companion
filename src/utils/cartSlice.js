import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: [],
    },//reducer func in correspondance to func -> like add, remove, etc
    reducers: {
        addItem : (state,action)=>{
            //mutating the state (directly modifying the state)
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length=0
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;