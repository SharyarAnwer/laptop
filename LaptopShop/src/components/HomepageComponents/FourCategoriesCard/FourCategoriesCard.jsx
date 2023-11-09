import React, { useState } from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Rating from "@mui/material/Rating";

import Pagination from "@mui/material/Pagination";

//We will be adding items to our cart. So we need this
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/CartSlice";

export default function FourCategoriesCard(prop) {
  const [translation, setTranslation] = useState(0);

  //This will dispatch an action that adds item to the cart
  const dispatch = useDispatch();

  const addItemsToCart = (itemToBeAdded) => {
    dispatch(addToCart({ items: 1, product: itemToBeAdded }));
  };

  return (
    <div className="flex flex-col">
      <div className="my-4 flex gap-4 items-center">
        {prop.products != null &&
          prop.products.map((element, index) => (
            <div
              style={{ transform: `translateX(${translation}%)` }}
              className="duration-500"
            >
              <Card sx={{ width: 225, maxWidth: "100%", boxShadow: "lg" }}>
                <CardOverflow>
                  <AspectRatio sx={{ minWidth: 200 }}>
                    <img
                      src={element.Picture}
                      srcSet={element.Picture}
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="body-xs">Bluetooth Headset</Typography>
                  <Link
                    href="#product-card"
                    fontWeight="md"
                    color="neutral"
                    textColor="text.primary"
                    overlay
                    endDecorator={<ArrowOutwardIcon />}
                  >
                    {element.Name}
                  </Link>

                  <Typography
                    level="title-lg"
                    sx={{ mt: 1, fontWeight: "xl" }}
                    endDecorator={
                      <Chip
                        component="span"
                        size="sm"
                        variant="soft"
                        color="success"
                      >
                        Lowest price
                      </Chip>
                    }
                  >
                    $ {element.Price}
                  </Typography>
                  <Typography level="body-sm">
                    (Only <b>{element.Quantity}</b> left in stock!)
                  </Typography>
                </CardContent>

                <Rating name="read-only" value={element.Rating} readOnly />

                <CardOverflow>
                  <Button
                    variant="solid"
                    size="lg"
                    sx={{ bgcolor: "#0156FF" }}
                    onClick={() => {
                      addItemsToCart(element);
                    }}
                  >
                    Add to cart
                  </Button>
                </CardOverflow>
              </Card>
            </div>
          ))}
      </div>

      <div
        className={`flex md:-translate-x-1/4 lg:translate-x-0 lg: justify-center`}
      >
        <Pagination
          count={prop.products != null ? prop.products.length : 5}
          color="primary"
          onClick={(e) => {
            if (e.target.textContent != null) {
              setTranslation((e.target.textContent - 1) * -100);
            }
          }}
        />
      </div>
    </div>
  );
}
