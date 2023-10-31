import React from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Postersrow from "./Components/Posters-Row/Postersrow";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Postersrow/>
    </div>
  );
}

export default App;
