import './styles/App.css';
import './styles/components.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment.js';
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

/*
*** TO DO: combine use of firebase db with comment code to store in online db ***

// This creates a reference to the collection of diary "entries" in your database.
let entryRef = collection(db, "entries")

const createEntry = document.getElementById('createEntry');
const entryList = document.getElementById('entryList');
const entryText = document.getElementById('entryText');
*/

function App() {

  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState([])

  const [key1, setKey] = useState(0)

  const makeANewComment = () => {
    const new_comments_array = comments
    new_comments_array.push(newComment)
    setComments(new_comments_array)
    setNewComment("")
    setKey(key1 + 1)
    console.log(comments)
  }

  const changeNewCommentValue = (comment_value) => {
    /* Q2: How do we update newComment? Set it equal to comment_value. */
    /* YOUR CODE HERE */
    setNewComment(comment_value)


  }
  return (
    <div className="App">

      <h3 className="app_topHeader">This is my Social Media Post</h3>
      <h4 className="app_author">Ddoski_123</h4>

      <img className="app_image" src="assets/oskiBeach.jpeg"/>

      <div className="app_commentsHeader">Comments:</div>

      {comments ? comments.map((comment) => {
        console.log('should return?')
        return <Comment text={comment} key={comment} key1={comment} />;

      }) : ''}

      <input className="app_input"
      onChange={(e) => {changeNewCommentValue(e.target.value)}}value={newComment} placeholder="Write a Comment Here!" />

      <div style={{"clear":"both"}}></div> 
      <button className="app_topButton"
      onClick={() => {makeANewComment()}}>Add Comment!</button>
      {/* Q1: What function should go in here? Call it with ZERO parameters. */}

      <div style={{"clear":"both"}}></div>

      <Link to="/profile/1">
      <button className="app_bottomButton">
      Go To My Profile
      </button>
    </Link>

    </div>
  );
}

export default App;
