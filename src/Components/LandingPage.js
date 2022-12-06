import React from 'react';
import '../styles/landing.css'

function LandingPage() {
  return (
    <body>
    <div class="any">
    <img src="public/assets/landing.jpeg" alt="background pic">
    </img>
    <div class="wrapper">
        <h2 id="name">Uni Ranker</h2>
        <h1>Look up your School <input type="text" id="cityName"/>?</h1>
        <button id="submit">Search</button>
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
