import React, { useState } from "react";
import axios from "axios";
import { StyledSearchBar } from '../AppStyle';
import home_pin from "../images/blue-home-pin.png";
import {DebounceInput} from 'react-debounce-input';

const api = `https://remote-roofing-app.herokuapp.com/address`

function Searchbar() {
  const [search, setSearch] = useState([]);

  const onChangeSearch = e => {
    const input = e.target.value;
    axios.post(api, { search: input })
      .then(res => {
        const data = res.data
        setSearch(data)
      }).catch(err => {
        alert(err)
      })
  };

  return (
    <StyledSearchBar>
      <div>
        <img src={home_pin} alt="Enter your address for Free Roof Inspection" />
        <label name="location">
          <DebounceInput minLength={1} debounceTimeout={500} list="locations" placeholder="Your Address" onChange={onChangeSearch} onClick={null} />
          <datalist name="locations" id="locations">
            {search.map((location, i) =>
              <option key={i} value={location}>{location}</option>
            )}
          </datalist>
        </label>
      </div>
      <button>Get Inspection</button>
    </StyledSearchBar>
  )
};

export default Searchbar;