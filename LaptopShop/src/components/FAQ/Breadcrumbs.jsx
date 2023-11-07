import React from "react";

// These imports are related to breadcrumbs that appear on top of page
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// These imports are related to breadcrumbs that appear on top of page

export default function Breadcrumb() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumb = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      sx={{ fontSize: "14px", fontWeight: "575", color: "#000" }}
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography
      key="3"
      color="text.primary"
      sx={{ fontSize: "14px", fontWeight: "575", color: "#000" }}
    >
      FAQ
    </Typography>
  ];
  return (
    <div className="mt-4">
      <Breadcrumbs
        separator={
          <NavigateNextIcon fontSize="small" sx={{ color: "#0156FF" }} />
        }
        aria-label="breadcrumb"
      >
        {breadcrumb}
      </Breadcrumbs>
    </div>
  );
}
