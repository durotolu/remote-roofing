import styled from "styled-components";

export const StyledApp = styled.div`
  background-color: #74787a;
  background-image: url("https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5923b3f775ad961072248b_rr-bg-1920w-optimized.png");
  background-size: 1500px;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  height: 37.5em;
  padding-top: 1px;

  header {
    max-width: 68.5%;
    margin: auto;
    text-decoration: none;
    
    .top-banner {
      justify-content: space-between;
      display: flex;
      align-items: center;
      margin: 1.3em auto;
    
      img {
        height: 2em;
        cursor: pointer;
      }
    
      div {
        display: flex;
        align-items: center;
        margin-right: 2%;
    
        img {
          height: 1em;
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
    width: 68%;
    height: 10.5em;
    border-radius: 11px;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    left: 15%;
    top: 72.5%;
    box-shadow: 2px 2px 7px 0 rgba(10,10,10,.5);

    .service {
      display: flex;
      align-items: center;
      margin-left: 7%;

      p {
        text-align: left;
        margin-left: 1.5em;
        font-size: 1.3em;
        width: 90%;
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

  button {
    height: 3.5em;
    width: 25em;
    background-color: #017afe;
    color: white;
    max-width: 190px;
    min-width: auto;
    font-size: 14px;
    margin-right: 10px;
    border-radius: 22px;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    img {
      height: 2em;
      margin-left: 1em;
    }

    label {
      width: 85.5%;

      input {
        height: 3em;
        border: none;
        width: 98.5%;
        background-color: transparent;
      }

      input:focus {
        outline: 1px solid #017afe;
      }

      input[list]::-webkit-calendar-picker-indicator {
        display: none;
      }
      input::-webkit-list-button {
        display: none;
      }
    }

  }
`