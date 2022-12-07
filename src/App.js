import React, { useState, useEffect } from 'react';
import HomeNav from './Components/HomeNav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// ok import './styles/components.css';
import { Link } from 'react-router-dom';
// ok import Comment from './Comment.js';
import './App.css';
import LandingPage from './Components/LandingPage.js';
import Login from './Components/Login.js';
import School from './Components/School.js';
import Comment from './Components/CommentBox.js';
import Webpage from './Webpage';
//import { db } from './Firebase.js';
import { v4 as uuid } from "uuid";
import {onSnapshot} from 'firebase/firestore';
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
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// Sets up firebase database
const db = getFirestore(app);


function App() {
  
  //let commentRef = collection(db, "comments");
  const [comments, setComments] = useState([{ name: "Loading...", docID: "initial" }]);

          useEffect(
            () =>
              onSnapshot(collection(db, "commentsTest"), (snapshot) =>
                setComments(snapshot.docs.map((doc) => ({...doc.data(), docID: doc.id})))
              )
              ,

          );
/*
  const sendComment = (comment) => {
    db.collection("comments").add({
      id: uuid(),
      comment: comment,
    });
  };

  const getComments = () => {
    commentRef.onSnapshot((querySnapShot) => {
      const saveFirebaseComments = [];
      querySnapShot.forEach((doc) => {
        saveFirebaseComments.push(doc.data());
      });
      setComments(saveFirebaseComments);
    });
  };

  // This creates a reference to the collection of diary "entries" in your database.

  /*
  const createComment = document.getElementById('createEntry');
  const commentList = document.getElementById('commentList');
  const commentText = document.getElementById('commentText');
  
  function changeNewCommentValue(){
  
  }
  function makeANewComment(){
  
  }
  var newComment = "0"
  
  //list all comments associated with that specific school
  let listAllComments  = async (school) => {
  
    //////// QUESTION 3: Find all documents related to the query you are making below! (Hint: Check the homework spec) ////////
    const q = commentRef.query('school', '==', school);
    const querySnapshot = /* YOUR CODE HERE */ //await getDocs(q);
  
    // Helper Code for Testing: This prints all the documents/entries you found and their IDs in the console! (Browser Developer Tools)
   /* querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
  
    const items = querySnapshot.docs.map(doc => {
        return `<li>${doc.data().timestamp.toDate().toDateString()}: ${doc.data().entry}</li>`
    });
  
    commentList.innerHTML = items.join('');
  
    //////// END OF QUESTION 3 ////////
  }
  /*
  let listClassesComments  = async (tab) => {
  
    //////// QUESTION 3: Find all documents related to the query you are making below! (Hint: Check the homework spec) ////////
    const q = query(commentRef, where(tab, '==', true)); //tab type = true
    const querySnapshot = /* YOUR CODE HERE */// await getDocs(q);
  
    // Helper Code for Testing: This prints all the documents/entries you found and their IDs in the console! (Browser Developer Tools)
    /*querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
  
      //change to create comment that is better ,atxhed
    const items = querySnapshot.docs.map(doc => {
        return `<li>${doc.data().timestamp.toDate().toDateString()}: ${doc.data().entry}</li>`
    });
  
    commentList.innerHTML = items.join('');
  
    //////// END OF QUESTION 3 ////////
    sendComment={sendComment} getComments={getComments} comments={comments}
  }
  */
  
  return (
    <div className="App">
      <Webpage />


    <Router>
        <Routes>
            <Route path="" element={<LandingPage/>} />

            <Route path="/Login" element={<Login/>} />

            <Route path="/Schools" element={<School/>} />

        </Routes>
    </Router>

    </div>
  );
}


export default App;
