import React from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Autocomplete } from "@mui/material";
import { slideImages } from "../../../images";

function Search({ handleChange, status }) {
  return (
    status && 
    <div className="search-wrapper">
      <div className="search-input">
        <SearchRoundedIcon sx={{ color: "var(--grey)" }} />
        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"

        /> */}
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Search;
