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

export default function ProductCard() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-7 mt-7 ">
      {Array(4)
        .fill(1)
        .map((index) => (
            <Card sx={{ width: 250, maxWidth: "100%", boxShadow: "lg" }}>
              <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                  <img
                    src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
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
                  Super Rockez A400
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
                  $ 499.00
                </Typography>
                <Typography level="body-sm">
                  (Only <b>7</b> left in stock!)
                </Typography>
              </CardContent>

              <Rating name="read-only" value={4} readOnly />

              <CardOverflow>
                <Button variant="solid" size="lg" sx={{ bgcolor: "#0156FF" }}>
                  Add to cart
                </Button>
              </CardOverflow>
            </Card>
        ))}
    </div>
  );
}
