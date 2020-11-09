import React, { useState } from "react";
import { StyledSearchBar } from '../AppStyle';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import home_pin from "../images/blue-home-pin.png";

function Searchbar() {
  const [search, setSearch] = useState("");
  // const debouncedSearch = useDebounce(search, 700);
  const { ready, value, suggestions: { loading, status, data }, setValue } = usePlacesAutocomplete();

  const onChangeSearch = e => {
    const input = e.target.value;
    setValue(input);
    console.log({
      ready,
      value,
      loading,
      status,
      data,
      setValue
    })
    // setSearch(value);
    // axios.get("https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=Paris&types=geocode&key=AIzaSyDy6b4AjIUft688RxkPR9fbZ2s9PP9BmUQ")
    //   .then(res => {
    //     console.log(res)
    //   }).catch(err => {
    //     console.log(err)
    //   })
  };

  return (
    <StyledSearchBar>
      {/* <LocationAutocomplete  /> */}
      <div>
        <img src={home_pin} alt="Enter your address for Free Roof Inspection" />
        <label>
          <input value={value} placeholder="Your Address" maxLength="256" onChange={onChangeSearch} />
        </label>
      </div>
      <button>Get Inspection</button>
    </StyledSearchBar>
  )
};

export default Searchbar;