import React, { useState } from "react";
import axios from "axios";
import { StyledSearchBar } from '../AppStyle';
import home_pin from "../images/blue-home-pin.png";

function Searchbar() {
  const [search, setSearch] = useState([]);
  // const debouncedSearch = useDebounce(search, 700);

  const onChangeSearch = e => {
    const input = e.target.value;

    axios.post("http://localhost:4500/address", { search: input })
      .then(res => {
        const data = res.data
        console.log(data)
        setSearch(data)
      }).catch(err => {
        console.log(err)
      })
  };

  return (
    <StyledSearchBar>
      <div>
        <img src={home_pin} alt="Enter your address for Free Roof Inspection" />
        <label>
          <input list="locations" placeholder="Your Address" maxLength="256" onChange={onChangeSearch} onClick={null} />
          <datalist name="locations" id="locations">
            {search.map(location =>
              <option value={location}>{location}</option>
            )}
            {/* <option value="Lagos">Lagos</option>
            <option value="Ibadan">Ibadan</option>
            <option value="london">london</option>
            <option value="cali">cali</option>
            <option value="swag">swag</option> */}
          </datalist>
        </label>
      </div>
      <button>Get Inspection</button>
    </StyledSearchBar>
  )
};

export default Searchbar;