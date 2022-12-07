import React, { useState, useEffect } from 'react';
import HomeNav from './Components/HomeNav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './Components/SearchBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// ok import './styles/components.css';
import { Link } from 'react-router-dom';
// ok import Comment from './Comment.js';
import './App.css';
import Webpage from './Webpage.js';
import LandingPage from './Components/LandingPage.js';
import GoogleLogin from './Components/GoogleLogin.js';
import School from './Components/School.js';
import Comment from './Components/Comment.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { onSnapshot, getFirestore, addDoc, collection, query, doc,  where, getDocs, Timestamp , orderBy, limit } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA0ydrhQpKBhVFjKesFxOLUREATXsViESI",
  authDomain: "uni-rater-db.firebaseapp.com",
  projectId: "uni-rater-db",
  storageBucket: "uni-rater-db.appspot.com",
  messagingSenderId: "887960388280",
  appId: "1:887960388280:web:5a72532eccfb944a006a4d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)




function App() {

        const [comments, setComments] = useState([{ name: "Loading...", docID: "initial" }]);

          useEffect(
            () =>
              onSnapshot(collection(db, "commentsTest"), (snapshot) =>
                setComments(snapshot.docs.map((doc) => ({...doc.data(), docID: doc.id})))


              )
              ,

          );
          console.log(comments)





  return (
    <div>
    <HomeNav></HomeNav>

    <Router>
        <Routes>


            <Route path="" element={<LandingPage/>} />

            <Route path="/Login" element={<GoogleLogin/>} />

            <Route path="/Schools" element={<SearchBar/>} />

            <Route path="/main" element={<Webpage/>} />

        </Routes>
    </Router>

    </div>
  );
}


export default App;
