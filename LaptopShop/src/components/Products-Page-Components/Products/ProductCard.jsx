import React, { useState, useEffect } from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Rating from "@mui/material/Rating";

import Pagination from "@mui/material/Pagination";

// Redux
// useSelector hook is used to extract data from redux store
import { useSelector } from "react-redux";

import axios from "axios";

export default function ProductCard(prop) {
  // The logic that we should display the products in grid or in list is defined in ListGridToggle.jsx.
  // The view type is stored in redux and then extracted here
  const productView = useSelector((state) => state.productView.view);

  // This entire block fetches the data from the API and saves it into newProducts array
  const [newProducts, setNewProducts] = useState([]);

  const category = prop.category;

  if (category == "New Products") {
    const url = "http://localhost:5000/products/get-new-products";

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);

          setNewProducts(response.data.response);

          console.log(newProducts);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);
  } else {
    const url = "http://localhost:5000/products/get-product";

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          //Axios requests can continue to run in the background even after the component unmounts.
          const controller = new AbortController();

          const response = await axios.post(
            "http://localhost:5000/products/get-product",
            {
              Category: category,
              signal: controller.signal,
            }
          );

          setNewProducts(response.data.response);

          //This is a clean up function. After the data has been received, tell the server to stop processing the request.
          return () => {
            controller.abort();
          };
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchProduct();
    }, []);
  }

  // This block fetches the data from the API and saves it into newProducts array

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = newProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePagination = (e, value) => {
    setCurrentPage(e.target.innerText);
  };

  return (
    <>
      <div
        className={`flex flex-row flex-wrap justify-center px-4 md:px-0 my-4 ${
          productView.view == "module" ? "gap-2" : "gap-4"
        }`}
      >
        {currentProducts.length <= 0 ? (
          <div>
            <h1 className="text-3xl">No Products Are Available In This Category</h1>
          </div>
        ) : (
          currentProducts.map((element, index) => (
            <>
              <Card
                sx={{
                  width: productView.view == "module" ? 140 : "100%",
                  maxWidth: "100%",
                  boxShadow: "lg",
                }}
              >
                <CardOverflow>
                  <AspectRatio sx={{ minWidth: 100 }}>
                    <img
                      src={element.Picture}
                      srcSet={element.Picture}
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="body-xs" sx={{ fontSize: "12px" }}>
                    {element.Category}
                  </Typography>
                  <Link
                    href="#product-card"
                    fontWeight="md"
                    color="neutral"
                    textColor="text.primary"
                    overlay
                    className="text-xs font-normal"
                    //   endDecorator={<ArrowOutwardIcon />}
                  >
                    {element.Name}
                  </Link>

                  <Typography
                    level="title-lg"
                    sx={{ mt: 0, fontWeight: "xl", fontSize: "14px" }}
                    //   endDecorator={
                    //     <Chip
                    //       component="span"
                    //       size="sm"
                    //       variant="soft"
                    //       color="success"
                    //     >
                    //       Lowest price
                    //     </Chip>
                    //   }
                  >
                    Rs {element.Price}
                  </Typography>
                  {/* <Typography level="body-sm">
                  (Only <b>7</b> left in stock!)
                </Typography> */}
                </CardContent>

                <div className="flex">
                  <Rating
                    name="read-only"
                    value={element.Rating}
                    readOnly
                    sx={{ fontSize: "15px" }}
                  />
                </div>

                <CardOverflow>
                  <Button variant="solid" size="sm" sx={{ bgcolor: "#0156FF" }}>
                    Add to cart
                  </Button>
                </CardOverflow>
              </Card>
            </>
          ))
        )}
      </div>

      <div className="px-4 flex justify-center">
        <Pagination
          count={Math.ceil(newProducts.length / 10)}
          variant="outlined"
          sx={{ color: "#F5F7FF" }}
          onClick={handlePagination}
        />
      </div>

      {/* Compare products section. */}
      {/* This sections will be hidden on tablet and above. For tablet, the compare products is defined in Products.jsx */}
      <div className="bg-[#F5F7FF] my-4 py-4 gap-4 flex flex-col items-center justify-center md:hidden">
        <h1 className="text-base font-bold">Compare Products</h1>

        <h6 className="text-sm">You have no items to compare</h6>
      </div>
      {/* Compare products section */}

      {/*My Wishlist section */}
      {/* This sections will be hidden on tablet and above. For tablet, the compare products is defined in Products.jsx */}
      <div className="bg-[#F5F7FF] my-4 py-4 gap-4 flex flex-col items-center justify-center md:hidden">
        <h1 className="text-base font-bold">My Wish List</h1>

        <h6 className="text-sm">You have no items in your wish list.</h6>
      </div>
      {/*My Wishlist section */}
    </>
  );
}
