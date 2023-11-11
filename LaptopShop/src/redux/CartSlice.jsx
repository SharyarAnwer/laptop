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

            // Check if the object to be added already exists in the shopping cart or not. If the object exist, increment its quantity by one else append the array.
            const foundObject = state.cart.products.find(item => item._id === action.payload.product._id);

            if (foundObject) {
                
                foundObject.quantityOrdered++

                const index = state.cart.products.indexOf(foundObject);

                state.cart.products[index] = foundObject

            }
            else {

                action.payload.product = {...action.payload.product , quantityOrdered : 1}

                state.cart.products.push(action.payload.product)

            }

            // action.payload.product = {...action.payload.product , quantity : action.payload.product.quantity++}

            

        },
        removeItemsFromCart : (state , action) => {

            state.cart.items = state.cart.items - action.payload.items

            state.cart.products = state.cart.products.filter(item => item._id != action.payload.product._id)

        },
        updateCart: (state , action) => {

            console.log(action.payload.updatedCart)

            state.cart.items = action.payload.updatedCart.length

            state.cart.products = action.payload.updatedCart
            
        }
    }
})

export default cartSlice.reducer
export const { addToCart , removeItemsFromCart , updateCart } = cartSlice.actions