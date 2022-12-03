import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AutoSearch = ({ sort, setSort, status, setSearch, data }) => {
  const [type, setType] = useState("name");
  const [sortValue, setSortValue] = useState("");
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const nameOptions = data.map((item) => item.name);
  const symbolOptions = data.map((item) => item.symbol);
  const sortByLowPrice = data.sort((a, b) => a.current_price - b.current_price)
  
  return (
    status && (
      <div className="search-wrapper">
        <div className="search-input">
          <SearchRoundedIcon sx={{ color: "var(--grey)" }} />
          <Autocomplete
            // disablePortal
            inputValue={inputValue}
            onChange={(event, newValue) => {
              setValue(newValue);
              setSearch(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              setSearch(newInputValue);
            }}
            options={type === "name" ? nameOptions : symbolOptions}
            sx={{
              width: "100%",
              color: "var(--white)",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--white)",
              },
              "& .MuiSvgIcon-root": {
                color: "var(--white)",
              },
              "&:hover": {
                "&& fieldset": {
                  borderColor: "#3a80e9",
                },
              },
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search Coin" />
            )}
          />
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="select-days"
            sx={{
              height: "3.5rem",
              color: "var(--white)",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--white)",
              },
              "& .MuiSvgIcon-root": {
                color: "var(--white)",
              },
              "&:hover": {
                "&& fieldset": {
                  borderColor: "#3a80e9",
                },
              },
            }}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"symbol"}>Symbol</MenuItem>
          </Select>
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select-days"
            sx={{
              height: "3.5rem",
              width: '10rem',
              color: "var(--white)",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--white)",
              },
              "& .MuiSvgIcon-root": {
                color: "var(--white)",
              },
              "&:hover": {
                "&& fieldset": {
                  borderColor: "#3a80e9",
                },
              },
            }}
          >
            <MenuItem value={"popularity"}>Popularity</MenuItem>
            <MenuItem value={"highPrice"}>High Price</MenuItem>
            <MenuItem value={"lowPrice"}>Low Price</MenuItem>
            <MenuItem value={"highRisk"}>Hign Risk</MenuItem>
            <MenuItem value={"lowRisk"}>Low Risk</MenuItem>
          </Select>
        </div>
      </div>
    )
  );
};

export default AutoSearch;

/*

current_price
: 
1.001
fully_diluted_valuation
: 
65520959308
high_24h
: 
1.005
id
: 
"tether"
image
: 
"https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663"
last_updated
: 
"2022-12-03T10:40:21.095Z"
low_24h
: 
0.997728
market_cap
: 
65520959308
market_cap_change_24h
: 
21810554
market_cap_change_percentage_24h
: 
0.0333
market_cap_rank
: 
3
max_supply
: 
null
name
: 
"Tether"
price_change_24h
: 
-0.002365287296962615
price_change_percentage_24h
: 
-0.2357
roi
: 
null
symbol
: 
"usdt"
total_supply
: 
65444431361.2044
total_volume
: 
26200120324
*/
