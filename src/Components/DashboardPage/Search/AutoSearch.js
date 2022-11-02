import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import './styles.css'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AutoSearch = ({ status, setSearch, data }) => {
    const [type, setType] = useState('name')
    const [value, setValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    const nameOptions = data.map((item) => item.name)
    const symbolOptions = data.map((item) => item.symbol)

    return (
        status &&
        (<div className="search-wrapper">
            <div className="search-input">
                <SearchRoundedIcon sx={{ color: "var(--grey)" }} />
                <Autocomplete
                    // disablePortal
                    inputValue={inputValue}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        setSearch(newValue)
                    }}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        setSearch(newInputValue)
                    }}
                    options={type === 'name' ? nameOptions : symbolOptions}
                    sx={{
                        width: '100%',
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
                    renderInput={(params) => <TextField {...params} label="Search Coin" />}
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
                    <MenuItem value={'name'}>Name</MenuItem>
                    <MenuItem value={'symbol'}>Symbol</MenuItem>
                </Select>
            </div>
        </div>)
    )
}

export default AutoSearch
