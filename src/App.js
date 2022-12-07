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
  apiKey: "AIzaSyDx-38gNltFn6Zr3F9uuUOJ9G6o02BBKxE",
  authDomain: "unirater-48c7b.firebaseapp.com",
  projectId: "unirater-48c7b",
  storageBucket: "unirater-48c7b.appspot.com",
  messagingSenderId: "900822460794",
  appId: "1:900822460794:web:fe066774481716c2438ec3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

let arr = 
  [
    {
      commentDateTime: "3pm",
      commentText: "Go bears!"  
    }, 
    {
      commentDateTime: "2pm",
      commentText: "Go afsbears!"  }, 
    {
      commentDateTime: "1pm",
      commentText: "Go bearsafsdaf!"  }]


function App() {
  const [comments, setComments] = useState([{ name: "Loading...", docID: "initial" }]);
  const [schools, setSchools] = useState([{ school: "school", docID: "initial" }]);
    try{
        useEffect(
          () =>
            onSnapshot(collection(db, "schools"), (snapshot) =>
              setSchools(snapshot.docs.map((doc) => ({...doc.data(), docID: doc.id})))
            )
            , []);
      } catch (error){
        console.error(error);
      }
      try{
        useEffect(
          () =>
            onSnapshot(collection(db, "comments"), (snapshot) =>
              setComments(snapshot.docs.map((doc) => ({...doc.data(), docID: doc.id})))
            )
            , []);
          
      } catch (error){
        console.error(error);
      }

    const saveComment = (input) => {
        addDoc(collection(db, "comments"), {
          classes: false,
          food: false,
          misc: true,
          rent: false,
          text: input,
        });
    };
  return (
    <div>

    <Router>
        <Routes>


            <Route path="" element={<LandingPage schools={schools}/>} />
            <Route path="/Login" element={<GoogleLogin/>} />

            <Route path="/Schools" element={<SearchBar />} />

            <Route path="/main" element={<Webpage saveComment={saveComment} comments={comments}/>} />

        </Routes>
    </Router>

    </div>
  );
}


export default App;
