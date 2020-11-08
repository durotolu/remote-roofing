import styled from "styled-components";

export const StyledApp = styled.div`
  background-color: #74787a;
  border: 2px solid black;
  background-image: url("https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5923b3f775ad961072248b_rr-bg-1920w-optimized.png");
  background-size: 1500px;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  height: 40em;

  header {
    max-width: 68.5%;
    margin: 0 auto;
    text-decoration: none;
    
    .top-banner {
      justify-content: space-between;
      display: flex;
      align-items: center;
      margin: 1.3em auto;
    
      img {
        height: 2em;
      }
    
      div {
        display: flex;
        align-items: center;
        margin-right: 2%;
    
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
    }
    
    nav {
      margin: 2.5em auto;
    
      div {
        max-width: 26%;
        display: flex;
        text-decoration: none;
    
        a {
          margin-right: 1.5em;
          text-decoration: none;
          color: white;
          font-size: 1.3em;
    
          span {
            border-bottom: 3px solid;
            padding-bottom: 10px;
          }
        }
      }
    }
    
    .heading {
      text-align: left;
      margin: 4.5em 0;
    
      h1 {
        font-size: 2.65em;
        margin-bottom: 0.5em;
      }
    
      h3 {
        font-size: 1.22em;
      }
    }
  }

  .benefits {
    background-color: #0059bf;
    width: 68.5%;
    height: 11em;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    z-index: 2;
    position: absolute;
    left: 15%;
    top: 72.5%;

    .service {
      display: flex;
      align-items: center;
      margin-left: 4em;

      p {
        text-align: left;
        margin-left: 1.5em;
        font-size: 1.3em;
      }

      .inspection {
        width: 50%;
      }

      .replace {
        width: 50%;
      }

      img {
        height: 4em;
      }
    }
  }
`

export const StyledSearchBar = styled.div`
  max-width: 35rem;
  height: 3.9em;
  border-top-left-radius: 5% 50%;
  border-top-right-radius: 5% 50%;
  border-bottom-left-radius: 5% 50%;
  border-bottom-right-radius: 5% 50%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3em;
  box-shadow: 1px 1px 3px 0 #000;

  img {
    border: 2px solid black;
    height: 1.9em;
    margin-left: 0.5em;
  }

  div {
    border: 2px dotted black;
    display: flex;
    align-items: center;
    width: 500px;

    input {
      height: 3em;
      border: none;
    }

    input:focus {
      outline: 1px solid #017afe;
    }

    button {
      height: 3.5em;
      background-color: #017afe;
      color: white;
      border-top-left-radius: 10% 50%;
      border-top-right-radius: 10% 50%;
      border-bottom-left-radius: 10% 50%;
      border-bottom-right-radius: 10% 50%;
    }
  }
`