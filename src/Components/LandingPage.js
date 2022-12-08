import {React, useEffect, useState} from 'react';
import '../styles/landing.css'
import landingPic from '../banner.webp'; // with import
import SearchBar from "./SearchBar.js";
import data from "../Components/data.json";
import HomeNav from './HomeNav';

function LandingPage({savePage, schools}) {

  return (
    <body>
          <HomeNav/>
    <div class="any">
    <div class="wrapper">
        <h1 id="name">Uni Ranker</h1>
        <h2 id="lookup">Look up your School</h2>
        <div className="App">
              <SearchBar placeholder="Enter school name..." savePage={savePage} data={schools} key={schools.docs}/>
            </div>
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
