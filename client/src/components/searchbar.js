import React, { useState } from "react";
import axios from "axios";
import { StyledSearchBar } from '../AppStyle';
import home_pin from "../images/blue-home-pin.png";
import {DebounceInput} from 'react-debounce-input';

function Searchbar() {
  const [search, setSearch] = useState([]);

  const onChangeSearch = e => {
    const input = e.target.value;
    console.log(input)
    axios.post("http://localhost:4500/address", { search: input })
      .then(res => {
        const data = res.data
        setSearch(data)
      }).catch(err => {
        console.log(err)
      })
  };

  return (
    <StyledSearchBar>
      <div>
        <img src={home_pin} alt="Enter your address for Free Roof Inspection" />
        <label for="location">
          <DebounceInput minLength={1} debounceTimeout={300} list="locations" placeholder="Your Address" onChange={onChangeSearch} onClick={null} />
          <datalist name="locations" id="locations">
            {search.map(location =>
              <option value={location}>{location}</option>
            )}
          </datalist>
        </label>
      </div>
      <button>Get Inspection</button>
    </StyledSearchBar>
  )
};

export default Searchbar;