import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({

    name : "Cart",
    initialState : {

        cart : []

    },
    reducers : {

        addToCart : (state , action) => {

            state.cart.push(action.payload)

        }
    }
})

export default cartSlice.reducer
export const {addToCart} = cartSlice.actions