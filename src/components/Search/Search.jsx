import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ value, onChange }) => (
  <TextField
    id="component-search"
    label="Search..."
    type="text"
    value={value}
    onChange={onChange}
    autoFocus
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
