import {React, useEffect, useState} from 'react';
import '../styles/landing.css'
import landingPic from '../banner.webp'; // with import
import SearchBar from "./SearchBar.js";
import data from "../Components/data.json";
import HomeNav from './HomeNav';

function LandingPage({savePage, schools, scLink}) {

  return (
    <>

    <HomeNav/>

    <div class="plsWork">

    <div id="name">

        <h2 id="lookup">UNI RANKER</h2>
        <div className="App">
              <SearchBar placeholder="Enter school name..." savePage={savePage} data={schools} key={schools.docs}/>
            </div>
    </div>

    </div>

    </>

  );
}
export default LandingPage;
