import React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BreadCrumbs() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      style={{ fontSize: "12px" }}
    >
      MUI
    </Link>,

    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      style={{ fontSize: "12px" }}
    >
      Core
    </Link>,

    <Typography key="3" color="text.primary" style={{ fontSize: "12px" }}>
      Breadcrumb
    </Typography>,
  ];

  return (
    <div className="px-4 my-4">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" color="primary" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}
