import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({

    name : "Cart",
    initialState : {

        cart : {

            items : 0,
            products : []

        }

    },
    reducers : {

        addToCart : (state , action) => {

            state.cart.items = state.cart.items + action.payload.items

            state.cart.products.push(action.payload.product)

        }
    }
})

export default cartSlice.reducer
export const {addToCart} = cartSlice.actions