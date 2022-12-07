import {initializeApp} from 'firebase/app'
import { getFirestore, collection, query, orderBy, limit, getDocs} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const messagesRef = collection(db, 'messsages') // create collection reference
const q = query(messagesRef, orderBy('createdAt'), limit(25)) // query documents
// First option
const retrieveData = async() => {
      const docsSnap = await getDocs(q)
      docsSnap.forEach(doc => {
        console.log(doc.data())
      })
    }
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIXJ5YT7hoNbBFqK3TBcV41-TzIO-7n7w",
  authDomain: "fir-auth-6edd8.firebaseapp.com",
  projectId: "fir-auth-6edd8",
  storageBucket: "fir-auth-6edd8.appspot.com",
  messagingSenderId: "904760319835",
  appId: "1:904760319835:web:44fd0d957f114b4e51447e",
  measurementId: "G-Q4TYKH9GG7",
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

