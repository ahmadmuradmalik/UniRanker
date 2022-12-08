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
import Comment from './Components/Comment.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { onSnapshot, getFirestore, addDoc, collection, query, doc,  where, getDocs, Timestamp , orderBy, limit } from 'firebase/firestore';
import SchoolsWebpage from './SchoolsWebpage.js';


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

//state for app, store school, store tabs
   

function App() {
  const [comments, setComments] = useState([{ name: "Loading...", docID: "initial" }]);
  const [comm, setComm] = useState([{ name: "Loading...", docID: "initial" }]);
  const [schools, setSchools] = useState([{ school: "school", docID: "initial" }]);
  const [tab, setTabs] = useState("all");
  const [page, setPage] = useState(" ");
  const [classes, setClass] = useState(false);
  const [rent, setRent] = useState(false);
  const [social, setSocial] = useState(false);
  const [food, setFood] = useState(false);
  const [misc, setMisc] = useState(false);

    try{
        useEffect(
          () =>
            onSnapshot(collection(db, "schools"), (snapshot) => 
              setSchools(snapshot.docs.map((doc) => ({...doc.data(), docID: doc.id})))
            ), []);
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
          classes: classes,
          food: food,
          social: social,
          misc: misc,
          rent: rent,
          text: input,
          school: "",
        });
        setClass(false)
        setRent(false)
        setFood(false)
        setSocial(false)
        setMisc(false)
    };

    const saveTab = (tab) => {
      setTabs(tab);
      sortTabData(tab);
    };

    const saveTag = (tag) => {
      for (let i = 0; i < tag.length; i++){
        console.log("saveTag", tag);
        if (tag[i] === 'classes'){
          setClass(true);
          console.log(tag, classes);
        } else if (tag[i] === 'misc'){
          setMisc(true);
          console.log(tag, misc);
        }
        else if (tag[i] === 'social'){
          setSocial(true);
          console.log(tag, social);
        }
        else if (tag[i] === 'food'){
          setFood(true);
          console.log(tag, food);
        }
        else if (tag[i] === 'rent'){
          setRent(true);
          console.log(tag, rent);
        }
      };
      }
        

    //if tab === all then display all  //displays certain school's comments
    function sortTabData(tabName){
      console.log('sortTabData');
      let dataClasses = [];
      let dataHousing = [];
      let dataSocial = [];
      let dataFood = [];
      let dataMisc = [];

      for (var i = 0; i < comments.length; i++){
        if (comments[i].classes === true) {
          dataClasses.push(comments[i]);
        }
        else if (comments[i].social === true){
          dataSocial.push(comments[i]);
        } else if (comments[i].rent === true){
          dataHousing.push(comments[i]);
        } else if (comments[i].food === true){
          dataFood.push(comments[i]);
        } else if (comments[i].misc === true){
          dataMisc.push(comments[i]);
        }
      }
        //might need to use a diff state variable to not mess it up
        if (tabName === "all") {
          setComm(comments);
        }
        else if (tabName === 'social'){
          setComm(dataSocial);
        } else if (tabName === 'food'){
          setComm(dataFood);
        }  else if (tabName === 'rent'){
          setComm(dataHousing);
        }  else if (tabName === 'misc'){
          setComm(dataMisc);
        }  else if (tabName === 'classes'){
          setComm(dataClasses);
        }
        console.log(comm);
    }

   

  return (
    <div>

    <Router>
        <Routes>


            <Route path="" element={<LandingPage schools={schools}/>} />
            <Route path="/Login" element={<GoogleLogin/>} />

            <Route path="/Schools" element={<SchoolsWebpage schools={schools} />} />

            <Route path="/main" element={<Webpage saveComment={saveComment} comments={comm} saveTab={saveTab} saveTag={saveTag}/>} />

        </Routes>
    </Router>

    </div>
  );
}

export default App;
