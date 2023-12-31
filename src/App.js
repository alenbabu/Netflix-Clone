import React from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Postersrow from "./Components/Posters-Row/Postersrow";
import { actions, originals, romance } from './constants/url'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Postersrow url={originals} title='Netflix Originals' isSmall={false}/>
      <Postersrow url={actions}  title='Action' isSmall />
      <Postersrow url={romance}  title='Romance' isSmall />

    </div>
  );
}

export default App;
