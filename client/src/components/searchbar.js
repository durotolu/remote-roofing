import { StyledSearchBar } from '../AppStyle'

function Searchbar() {
  return (
    <StyledSearchBar>
      <div>
        <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png" alt="Enter your address for Free Roof Inspection" />
        <label>
          <input placeholder="Your Address" />
        </label>
      </div>
      <button>Get Inspection</button>
    </StyledSearchBar>
  )
};

export default Searchbar;