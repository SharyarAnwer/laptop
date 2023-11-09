import { useState, useEffect } from "react";

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

import axios from "axios";

//We will be adding items to our cart. So we need this
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/CartSlice";

export default function ProductCard() {
  const [newProducts, setNewProducts] = useState([]);

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

  //This will dispatch an action that adds item to the cart
  const dispatch = useDispatch();

  const addItemsToCart = (itemToBeAdded) => {

    dispatch(addToCart({ items: 1 , product : itemToBeAdded }));
    
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-7 mt-7 ">
      {newProducts.map((element, index) => (
        <Card sx={{ width: 250, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              {newProducts.length > 0 && (
                <img
                  src={newProducts[index].Picture}
                  srcSet={newProducts[index].Picture}
                  loading="lazy"
                  alt=""
                />
              )}
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            {newProducts.length > 0 && (
              <Typography level="body-xs">
                {newProducts[index].Category}
              </Typography>
            )}
            {newProducts.length > 0 && (
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                {newProducts[index].Name}
              </Link>
            )}

            {newProducts.length > 0 && (
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
                Rs {newProducts[index].Price}
              </Typography>
            )}
            {newProducts.length > 0 && (
              <Typography level="body-sm">
                (Only <b>{newProducts[index]?.Quantity}</b> left in stock!)
              </Typography>
            )}
          </CardContent>

          {newProducts.length > 0 && (
            <Rating
              name="read-only"
              value={newProducts[index]?.Rating}
              readOnly
            />
          )}

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
      ))}
    </div>
  );
}
