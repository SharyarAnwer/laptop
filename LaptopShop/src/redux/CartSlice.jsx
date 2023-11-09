import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({

    name : "Cart",
    initialState : {

        cart : {

            items : 0,

        }

    },
    reducers : {

        addToCart : (state , action) => {

            console.log(state)
            console.log(action)
            console.log(state.cart.items)

        }
    }
})

export default cartSlice.reducer
export const {addToCart} = cartSlice.actions