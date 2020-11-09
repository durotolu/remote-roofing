import logo from './logo.svg';
import './App.css';
import { StyledApp } from './AppStyle'
import NavBanner from "./components/navbanner"
import Benefits from "./components/benefits"
import Searchbar from "./components/searchbar"

function App() {
  return (
    <StyledApp className="App">
      <header>
        <NavBanner />
        <div className="heading">
          <div>
            <h1>Roof inspection made remote and easy</h1>
            <h3>Get your roof inspected remotely and connect with our trusted roofers</h3>
          </div>
          <Searchbar />
        </div >
      </header>
      <Benefits />
    </StyledApp>
  );
}

export default App;