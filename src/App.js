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
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';

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

function App() {

  return (
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
    </div>
  );
}

export default App;
