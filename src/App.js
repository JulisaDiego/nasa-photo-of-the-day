import React from "react"
import "./App.css"
import CardList from "./CardList"
import styled from "styled-components"

const Headline = styled.h1`
color: #160f30;
font-size: 2.5rem;
background: -webkit-linear-gradient(#202060, #ff6464);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
function App() {
  return (
    <div className="App">
     <Headline>Nasa Photo Of The Day</Headline>

     <CardList/>
    </div>
  );
}

export default App;
