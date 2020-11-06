import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header /*className="App-header"*/>
        <Head>
          <img height="35em" src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f12985a91b23596370f7a81_logo-72-dc-7-f-0-f%402x.png" alt="Remote Roofing Logo"></img>
          <a href="tel:+1 (800) 401-7716">+1 (800) 401-7716</a>
        </Head>
        <nav>
          <a href="">Home</a>
          <a href="">FAQ</a>
          <a href="">Services</a>
        </nav>
      </Header>
    </div>
  );
}

const Header = styled.header`
  background-color: #74787a;
  max-width: 70%;
  margin: 0 auto;
  text-decoration: none
`
const Head = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`

export default App;