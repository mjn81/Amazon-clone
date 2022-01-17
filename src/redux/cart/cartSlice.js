import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart : [],
    numOfProducts : 0
}
const cartSlice = createSlice({
    name : 'cartSlice',
    initialState,
    reducers : {
        addToCart : (state , payload) =>{
            state.cart = [...state.cart , ...payload.product];
            state.numOfProducts += payload.amount
        },
        removeFromCart : (state , payload) =>{
            if(payload.amount >1){
                state.cart.filter((element) => (element!==payload.products[0]));
                state.numOfProducts -=payload.amount;
            } else{
                state.cart.splice(state.cart.indexOf(payload.product));  
                state.numOfProducts--;
            }
        }
    }
})

export default cartSlice;