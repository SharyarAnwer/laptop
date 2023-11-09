import {configureStore} from "@reduxjs/toolkit"

import ProductViewSlice from "./ProductViewSlice"

import CartSlice from "./CartSlice"

const store = configureStore({

    reducer : {

        productView : ProductViewSlice,
        cart : CartSlice

    }
    
})

export default store