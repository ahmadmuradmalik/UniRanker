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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  // Authentication
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();