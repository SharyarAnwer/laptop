import React, { useState } from "react";

// These imports are related to changing the product display from grid to list view
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// These imports are related to changing the display from grid to list view

// These imports are from Redux store
// toggleView is a reducer in Redux store. It saves that the products should be shown in list view or grid view 
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../../../redux/ProductViewSlice";
// These above imports are from Redux store

export default function ListGridToggle() {

  //REDUX
  const dispatch = useDispatch();
  //REDUX

  const [view, setView] = useState("list");

  const handleChange = (event, nextView) => {

    setView(nextView);

    //REDUX
    dispatch(toggleView({view : nextView}))

  };

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      size="small"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>

      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
