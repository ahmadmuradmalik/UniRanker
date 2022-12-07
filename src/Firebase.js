import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDx-38gNltFn6Zr3F9uuUOJ9G6o02BBKxE",
    authDomain: "unirater-48c7b.firebaseapp.com",
    projectId: "unirater-48c7b",
    storageBucket: "unirater-48c7b.appspot.com",
    messagingSenderId: "900822460794",
    appId: "1:900822460794:web:fe066774481716c2438ec3"
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
  
  