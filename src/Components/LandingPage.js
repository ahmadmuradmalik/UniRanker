import React from 'react';
import '../styles/landing.css'
import landingPic from '../banner.webp'; // with import
import SearchBar from "./SearchBar.js";

function LandingPage() {
  return (

    <body>
    <div class="any">
    <div class="wrapper">
        <h2 id="name">Uni Ranker</h2>
        <h1>Look up your School</h1>
        <button id="submit">Search</button>
        <SearchBar></SearchBar>
    </div>
    <div id="weather">
        <h2 id="mainWeather"></h2>
        <p id="weatherDescription"></p>
    </div>
    </div>
    </body>


  );
}
export default LandingPage;
