import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import './styles.css'

const AutoSearch = ({ status, setSearch, data }) => {

    const [value, setValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    const options = data.map((item) => item.name)

    return (
        status &&
        (<div className="search-wrapper">
            <div className="search-input">
                <SearchRoundedIcon sx={{ color: "var(--grey)" }} />
                <Autocomplete
                    disablePortal
                    inputValue={inputValue}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        setSearch(newValue)
                    }}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        setSearch(newInputValue)
                    }}
                    options={options}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} label="Search Coin" />}
                />
            </div>
        </div>)
    )
}

export default AutoSearch
