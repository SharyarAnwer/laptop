import { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Paypal from "./Paypal.svg";

import Dropdown from "./Dropdown/Dropdown";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function Cart() {
  const [open, setOpen] = useState(true);

  const [showCountry, setShowCountry] = useState(true);

  const [checkedRadioButton, setCheckedRadioButton] = useState({
    first: false,
    second: false,
  });

  // These are for discount code dropdown
  const [showDiscountCode , setShowDiscountCode] = useState(false)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {/* Dropdown for shipping and taxes */}
                      <div className="mt-4 mb-2">
                        <div
                          className="flex justify-between"
                          onClick={() => {
                            setShowCountry(!showCountry);
                          }}
                        >
                          <p className="text-base font-medium text-gray-900">
                            Estimate Shipping and Tax
                          </p>
                          <ExpandMoreIcon />
                        </div>

                        <p className="text-sm text-gray-500">
                          Enter your destination to get a shipping estimate.
                        </p>

                        <div
                          className={`${
                            showCountry ? "" : "h-0"
                          } duration-500 overflow-hidden`}
                        >
                          <form>
                            <Dropdown />

                            {/* This input field was taken from material UI. It takes in state/province */}
                            <div>
                              <label
                                for="email"
                                class="block text-sm font-medium leading-6 text-gray-900"
                              >
                                State/Province
                              </label>
                              <div class="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autocomplete="email"
                                  required
                                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            {/* This input field was taken from material UI. It takes in Zip/Postal code */}
                            <div>
                              <label
                                for="email"
                                class="block text-sm font-medium leading-6 text-gray-900 mt-2"
                              >
                                Zip/Postal Code
                              </label>
                              <div>
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autocomplete="email"
                                  required
                                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <p className="text-sm font-medium mt-2 text-gray-900">
                                Standard rate
                              </p>

                              <div className="flex gap-3 items-start mt-2">
                                <input
                                  type="radio"
                                  checked={checkedRadioButton.first}
                                  onClick={() => {
                                    setCheckedRadioButton({
                                      first: true,
                                      second: false,
                                    });
                                  }}
                                />
                                <p className="-m-1 text-sm">
                                  Price may vary depending on the
                                  item/destination. Shop Staff will contact you.
                                  $21.00
                                </p>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm font-medium mt-2 text-gray-900">
                                Pickup from store
                              </p>

                              <div className="flex gap-3 items-start mt-2">
                                <input
                                  type="radio"
                                  checked={checkedRadioButton.second}
                                  onClick={() => {
                                    setCheckedRadioButton({
                                      first: false,
                                      second: true,
                                    });
                                  }}
                                />
                                <p className="-m-1 text-sm">
                                  1234 Street Adress, City Address, 1234
                                </p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* Dropdown for shipping and taxes */}

                      {/* Dropdown for applying discount codes */}
                      <div className="mt-4 mb-2">
                        <div
                          className="flex justify-between"
                          onClick={() => {
                            setShowDiscountCode(!showDiscountCode);
                          }}
                        >
                          <p className="text-base font-medium text-gray-900">
                            Apply Discount Code
                          </p>
                          <ExpandMoreIcon />
                        </div>

                        <div
                          className={`${
                            showDiscountCode ? "" : "h-0"
                          } duration-500 overflow-hidden`}
                        >
                          <form>
                            {/* This input field was taken from material UI. It takes in Zip/Postal code */}
                            <div>
                              <label
                                for="dicounted code"
                                class="block text-sm font-medium leading-6 text-gray-900 mt-2"
                              >
                                Enter discount code
                              </label>
                              <div>
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autocomplete="email"
                                  required
                                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* Dropdown for applying discount codes */}

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>

                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex gap-2 items-center justify-center rounded-full border border-transparent bg-[#FFB800] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#FFB800]"
                        >
                          <span>Check out with</span>
                          <span>
                            <img src={Paypal} />
                          </span>
                        </a>
                      </div>

                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center text-xs rounded-full border border-[#A2A6B0] bg-[#FFF] px-6 py-3 font-medium text-[#A2A6B0] shadow-sm hover:bg-[#FFF]"
                        >
                          Check out with multiple addresses
                        </a>
                      </div>

                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or &nbsp;
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
