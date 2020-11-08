import logo from './logo.svg';
import './App.css';
import { StyledApp, Head, Header, StyledHeading, StyledNav, StyledSearchBar } from './AppStyle'

function App() {
  return (
    <StyledApp className="App">
      <Header /*className="App-header"*/>
        <Head>
          <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f12985a91b23596370f7a81_logo-72-dc-7-f-0-f%402x.png" alt="Remote Roofing Logo" />
          <div>
            <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f1297d1c3fecf36271c10a2_483947%403x.png" alt="Phone icon" height="0.2px" />
            <a href="tel:+1 (800) 401-7716">+1 (800) 401-7716</a>
          </div>
        </Head>
        <StyledNav>
          <div>
            <a href="#"><span>Home</span></a>
            <a href="#">FAQ</a>
            <a href="#">Services</a>
          </div>
        </StyledNav>
        <StyledHeading>
          <div>
            <h1>Free Roof Repair Inspection & Local Roofing Quote</h1>
            <h3>Get your roof inspected remotely and connect with our trusted roofers</h3>
          </div>
          <StyledSearchBar>
            <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png" alt="Enter your address for Free Roof Inspection" />
            <div>
              <label>
                <input placeholder="Your Address" />
              </label>
              <button>Get Inspection</button>
            </div>
          </StyledSearchBar>
        </StyledHeading>
      </Header>
    </StyledApp>
  );
}

export default App;