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
import School from './Components/School.js'

const my_Profile_Picture = "./profilePicture.jpg";

function Webpage({saveComment, comments, saveTab, saveTag}) {

  //if/else what school return comments related to that school
  //pass those comments into designated place

  return (
    <div>
      <Row>
        <Row>
          <HomeNav></HomeNav>
          </Row>
        <Row>
          <Col xs={2}>
            <Sidebar saveTab={saveTab}/>
          </Col>
          <Col className="mainSec">
            <Row>
            <div className="App">
            <div className="schoolInfoDiv">
                  <img className="schoolPic" alt="" src="https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg" ></img>
                  <h1 className="schoolName">Name of School</h1>
                  <Row>
                    <p className="schoolInfo">School Description</p>
                  </Row>
            </div>

          </div>
            </Row>
            <Row>
              <BoxInput saveTag={saveTag} saveComment={saveComment}></BoxInput>
            </Row>
            <Row>
              <CommentBox comments={comments}/>
            </Row>
          </Col>
        </Row>        
      </Row>
    </div>
  );
}



export default Webpage;
