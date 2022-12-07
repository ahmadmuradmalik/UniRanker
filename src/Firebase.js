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
  export const db = getFirestore(app);
  
  
  //chanfe to have more comment info
  /* onAuthStateChanged(auth, (user) => {
    if (user) {
  
        listClassesComments(user) //take this out?? should be able to see all comments no matter what
  
        submitComment.onclick = async () => {
            //////// QUESTION 4: Add an entry in the database! (Hint: Check the homework spec) ////////
            let timestamp = Timestamp.now()
  
            const newCommentRef = await addDoc(collection(db,"comments"), {
                uid: user.uid,
                comment: commentText.value,
                timestamp: timestamp,
  
            }) /* YOUR CODE HERE */
  
          /*  console.log("Document written at", newCommentRef.timestamp);
            commentText.value = ""
            listAllComments(user)*/
  
            //////// END OF QUESTION 4 ////////
       /* }
    } 
  });*/
  
  