import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const FilterBar = function FilterBar(){
  return(
    <Autocomplete
      id="combobox_region"
      options={regions}
      sx={{width: "250px"}}
      renderInput={(params) => <TextField {...params} label="Filter by Region" />}/>
  );
};
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]
export default FilterBar;

