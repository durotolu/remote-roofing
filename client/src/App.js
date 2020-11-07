import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header /*className="App-header"*/>
        <Head>
          <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f12985a91b23596370f7a81_logo-72-dc-7-f-0-f%402x.png" alt="Remote Roofing Logo" />
          <div>
            <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f1297d1c3fecf36271c10a2_483947%403x.png" height="0.2px" />
            <a href="tel:+1 (800) 401-7716">+1 (800) 401-7716</a>
          </div>
        </Head>
        <StyledNav>
          <div>
            <a href="">Home</a>
            <a href="">FAQ</a>
            <a href="">Services</a>
          </div>
        </StyledNav>
        <StyledHeading>
          <div>
            <h1>Free Roof Repair Inspection & Local Roofing Quote</h1>
            <h3>Get your roof inspected remotely and connect with our trusted roofers</h3>
          </div>
          <label>
            <input/>
          </label>
        </StyledHeading>
      </Header>
    </div>
  );
}

const Header = styled.header`
  color: white;
  background-color: #74787a;
  max-width: 68%;
  margin: 0 auto;
  text-decoration: none;
`
const Head = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 1.5em auto;

  img {
    height: 2.5em;
  }

  div {
    display: flex;
    align-items: center;
    margin-right: 3.5em;
    img {
      height: 1em;
      margin-right: 0.5em
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`

const StyledNav = styled.nav`
  margin: 2.5em auto;
  div {
    max-width: 30%;
    display: flex;
    justify-content: space-between;
    text-decoration: none;

    a {
    text-decoration: none;
    color: white;
    font-size: 1.3em;
    }
  }
`

const StyledHeading = styled.div`
  text-align: left;

  h1 {
    font-size: 2.6em;
  }

  h3 {
    font-size: 1.2em;
  }
`

export default App;