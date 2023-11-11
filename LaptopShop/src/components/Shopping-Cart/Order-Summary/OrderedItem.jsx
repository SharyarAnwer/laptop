import React, { useEffect, useState } from "react";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CancelIcon from "@mui/icons-material/Cancel";

import CreateIcon from "@mui/icons-material/Create";

//We will be adding/removing items to our cart. So we need this from redux
import { useDispatch } from "react-redux";
import { removeItemsFromCart } from "../../../redux/CartSlice";

export default function OrderedItem(prop) {
  // useState was always one step behind. So it was explicitly told to update its value when quantity changes in the redux store
  useEffect(() => {
    setCounter(prop.Product.quantityOrdered);
  }, [prop.Product.quantityOrdered]);

  const [counter, setCounter] = useState(prop.Product.quantityOrdered);
  // useState was always one step behind. So it was explicitly told to update its value when quantity changes in the redux store

  //This will dispatch an action that adds/removes item to the cart
  const dispatch = useDispatch();

  const removeFromCart = (itemToBeRemoved) => {
    dispatch(
      removeItemsFromCart({
        items: itemToBeRemoved.quantityOrdered,
        product: itemToBeRemoved,
      })
    );
  };

  // Updating the product after changes
  let updatedProduct

  useEffect(() => {

    updatedProduct = { ...prop.Product, quantityOrdered: counter }

    prop.updateItemsInCart(updatedProduct)

  }, [counter]);

  return (
    <div className="flex flex-col gap-3 my-4 w-full">
      <div className="flex items-center gap-4">
        <img src={prop.Product.Picture} className="w-24" />

        <p className="text-base">{prop.Product.Name}</p>
      </div>

      <div className="flex gap-2 justify-between border-b-2 pb-5">
        <div>
          <h1 className="font-semibold">Price</h1>
          <h6 className="font-bold">Rs {prop.Product.Price}</h6>
        </div>

        <div>
          <h1 className="font-semibold">Qty</h1>

          <div className="w-12 aspect-square bg-[#F5F7FF] flex rounded-md mt-1">
            <h6 className="w-3/4 h-full flex items-center justify-center font-bold">
              {counter}
            </h6>

            <button className="w-1/4 flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                <ExpandLessIcon sx={{ fontSize: "12px" }} />
              </button>

              <button
                onClick={() => {
                  if (counter > 0) {
                    setCounter(counter - 1);
                  }
                }}
              >
                <ExpandMoreIcon sx={{ fontSize: "12px" }} />
              </button>
            </button>
          </div>
        </div>

        <div>
          <h6 className="font-semibold">Sub total</h6>

          <h4 className="font-bold">${prop.Product.Price * counter}</h4>
        </div>

        <div className="flex flex-col gap-2">
          <div
            onClick={() => {
              removeFromCart(prop.Product);
            }}
          >
            <CancelIcon sx={{ color: "#A1A1A1" }} />
          </div>

          <CreateIcon sx={{ color: "#A1A1A1" }} />
        </div>
      </div>
    </div>
  );
}
