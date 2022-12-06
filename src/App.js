<<<<<<< HEAD
import React from 'react';
import './App.css';
import HomeNav from './Components/HomeNav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// ok import './styles/components.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// ok import Comment from './Comment.js';
=======
import './App.css';
import Navbar from './Components/Navbar.js';
import LandingPage from './Components/LandingPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/components.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Components/Comment.js';
>>>>>>> 1eee5b01a9473f987a3dfd1ca688b053279834ef
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';
import Webpage from './Webpage';

const firebaseConfig = {
  apiKey: "AIzaSyA0ydrhQpKBhVFjKesFxOLUREATXsViESI",
  authDomain: "uni-rater-db.firebaseapp.com",
  projectId: "uni-rater-db",
  storageBucket: "uni-rater-db.appspot.com",
  messagingSenderId: "887960388280",
  appId: "1:887960388280:web:5a72532eccfb944a006a4d"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// Authentication
/*const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* ok
// Sign in
signInBtn.onclick = () => signInWithPopup(auth, provider);

// Sign out
signOutBtn.onclick = () => {
  signOut(auth, provider);
  location.reload()
}

onAuthStateChanged(auth, (user) => {
  if (user) {
      // If a user signs in:
      whenSignedIn.hidden = false;
      whenSignedOut.hidden = true;
      userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
  } else {
      whenSignedIn.hidden = true;
      whenSignedOut.hidden = false;
      userDetails.innerHTML = '';
  }
});

// Sets up firebase database
const db = getFirestore(app);
*/
/*
*** TO DO: combine use of firebase db with comment code to store in online db ***

// This creates a reference to the collection of diary "entries" in your database.
let entryRef = collection(db, "entries")

const createEntry = document.getElementById('createEntry');
const entryList = document.getElementById('entryList');
const entryText = document.getElementById('entryText');
*/
function changeNewCommentValue(){

}
function makeANewComment(){

}
var newComment = "0"


function App() {

  return (
<<<<<<< HEAD
    <div className="App">
      <Webpage/>

      <h3 className="app_topHeader">This is my Social Media Post</h3>
      <h4 className="app_author">Ddoski_123</h4>

      <img alt="" className="app_image" src="assets/oskiBeach.jpeg"/>

      <div className="app_commentsHeader">Comments:</div>

      {/* okcomments ? comments.map((comment) => {
        console.log('should return?')
        return <Comment text={comment} key={comment} key1={comment} />;

      }) : ''*/}

      <input className="app_input"
      onChange={(e) => {changeNewCommentValue(e.target.value)}}value={newComment} placeholder="Write a Comment Here!" />

      <div style={{"clear":"both"}}></div> 
      <button className="app_topButton"
      onClick={() => {makeANewComment()}}>Add Comment!</button>
      {/* Q1: What function should go in here? Call it with ZERO parameters. */}


=======
  <>
    <Navbar></Navbar>
    <LandingPage></LandingPage>

    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
>>>>>>> 1eee5b01a9473f987a3dfd1ca688b053279834ef
    </div>
  );
}

export default App;
