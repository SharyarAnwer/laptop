import React from "react";

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

export default function ProductCard() {
  // The logic that we should display the products in grid or in list is defined in ListGridToggle.jsx.
  // The view type is stored in redux and then extracted here
  const productView = useSelector((state) => state.productView.view);

  return (
    <>
      <div
        className={`flex flex-row flex-wrap justify-center px-4 md:px-0 my-4 ${
          productView.view == "module" ? "gap-2" : "gap-4"
        }`}
      >
        {Array(20)
          .fill(1)
          .map(() => (
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
                      src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                      srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="body-xs" sx={{ fontSize: "12px" }}>
                    Bluetooth Headset
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
                    Super Rockez A400
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
                    $ 499.00
                  </Typography>
                  {/* <Typography level="body-sm">
                  (Only <b>7</b> left in stock!)
                </Typography> */}
                </CardContent>

                <div className="flex">
                  <Rating
                    name="read-only"
                    value={4}
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
          ))}
      </div>

      <div className="px-4 flex justify-center">
        <Pagination count={10} variant="outlined" sx={{ color: "#F5F7FF" }} />
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
