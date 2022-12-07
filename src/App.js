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
import LandingPage from './Components/LandingPage.js';
import GoogleLogin from './Components/GoogleLogin.js';
import School from './Components/School.js';
import Comment from './Components/Comment.js';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';
import { onSnapshot, doc } from 'firebase/firestore';
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*
let commentRef = collection(db, "commentsTest")

let findEntries = async (uniID) => {
  const q = query(commentRef, where('schoolID', '==', uniID.schoolID));
  const querySnapshot = await getDocs(q)
// Check in browser developer tools console to test
  querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

// I think this returns a list of docs w/ timestap
  const items = querySnapshot.docs.map(doc => {
      return `<li>${doc.data().timestamp.toDateString()}: ${doc.data().entry}</li>`
    });  
}
*/

function App() {
  const [comments, setComments] = useState([{ name: "Loading...", docID: "initial" }]);

  useEffect(
    () =>
      onSnapshot(collection(db, "commentsTest"), (snapshot) => 
        setComments(snapshot.docs.map((doc) => ({...doc.data(), docID: doc.id})))
      ),
    []
  );

  return (
    <div>
    <HomeNav></HomeNav>

    <Router>
        <Routes>


            <Route path="" element={<LandingPage/>} />

            <Route path="/Login" element={<GoogleLogin/>} />

            <Route path="/Schools" element={<SearchBar/>} />

            <Route path="/search" element={<SearchBar/>} />

        </Routes>
    </Router>

    </div>
  );
}


export default App;
