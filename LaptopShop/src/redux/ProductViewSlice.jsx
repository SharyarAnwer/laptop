// This slice was created to store that in what way should we display the products.
// List grid toggle component updates the toggle state
import { createSlice } from "@reduxjs/toolkit";

const productViewSlice  = createSlice({

    name : "Product View",
    initialState : {

        view : "module"

    },
    reducers : {

        toggleView : (state , action) => {

            console.log("State" , state)

            console.log("Action" , action)

            state.view = action.payload

        }
    }
})

export default productViewSlice.reducer
export const {toggleView} = productViewSlice.actions