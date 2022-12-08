import { Link } from 'react-router-dom';
//import './styles/components.css'
import HomeNav from './Components/HomeNav.js';
import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
//import { withRouter } from "react-router";
import Sidebar from "./Components/Sidebar.js";
import Input from "./Components/Input.js";
import BoxInput from "./Components/BoxInput.js";
import TagButton from "./Components/TagButton.js";
import './Components/Components.css'
import CommentBox from './Components/CommentBox.js';
import SchoolCard from './Components/Cards.js';
import { collection, query, where } from 'firebase/firestore';
import db from './App.js';
import App from './App.js';

const my_Profile_Picture = "./profilePicture.jpg";


function SchoolsWebpage({schools}) {

  //if/else what school return comments related to that school
  //pass those comments into designated place

  return (
    <div>
      <Row>
        <Row>
          <HomeNav></HomeNav>
          </Row>
        <Row>
          <SchoolCard schools={schools}></SchoolCard>
        </Row>        
      </Row>
    </div>
  );
}



export default SchoolsWebpage;