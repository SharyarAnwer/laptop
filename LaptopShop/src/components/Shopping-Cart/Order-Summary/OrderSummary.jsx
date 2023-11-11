import React from "react";

//Retrieve from the store all the items have been added to the cart
import { useSelector , useDispatch } from "react-redux";

// This is the reducer responsible to update shopping cart
import { updateCart } from "../../../redux/CartSlice";

import OrderedItem from "./OrderedItem";

export default function OrderSummary() {

  // This will hold all the cart items after they have been updated
  let updatedCart = [];

  //This function holds the updated Cart items
  // The logic:
  // 1) Check if the product exist in the array or not
  // 2) If it exists than just update it else add it as a new product
  const updateItemsInCart = (updatedProduct) => {
    const productFound = updatedCart.find(
      (item) => item._id === updatedProduct._id
    );

    if (productFound) {
      const index = updatedCart.indexOf(productFound);

      updatedCart[index] = updatedProduct;
    } else {
      updatedCart.push(updatedProduct);
    }
  };

  //Retrieve from the store all the items that have been added to the cart
  const itemsInCart = useSelector((state) => state.cart.cart.products);

  const dispatch = useDispatch();

  const updateShoppingCart = () => {

    dispatch(updateCart({updatedCart : updatedCart}))

  }

  return (
    <div className="px-4 flex flex-col items-center">
      {itemsInCart.map((element) => (
        <OrderedItem Product={element} updateItemsInCart={updateItemsInCart} />
      ))}

      <button
        className="bg-[#000000] text-white px-4 py-2 rounded-full font-semibold"
        onClick={updateShoppingCart}
      >
        Update Shopping Cart
      </button>
    </div>
  );
}
