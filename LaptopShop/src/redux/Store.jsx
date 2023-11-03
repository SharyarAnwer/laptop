import {configureStore} from "@reduxjs/toolkit"

import ProductViewSlice from "./ProductViewSlice"

const store = configureStore({

    reducer : {

        productView : ProductViewSlice

    }
})

export default store