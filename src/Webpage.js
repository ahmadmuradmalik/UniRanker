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

const my_Profile_Picture = "./profilePicture.jpg";

function Webpage(props) {
  return (
    <div>
      <Row>
        <Col xs={2}>
          <Sidebar/>
        </Col>
        <Col className="mainSec">
          <Row>
              <div className="schoolInfoDiv">
                <img className="schoolPic" alt="" src="https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg" ></img>
                <h1 className="schoolName">Name of School</h1>
                <Row>
                  <p className="schoolInfo">School Description</p>
                </Row>
              </div>
          </Row>
          <Row>
            <BoxInput></BoxInput>
          </Row>
          <Row>
            <CommentBox/>
          </Row>
        </Col>
        
      </Row>
    </div>
  );
}



export default Webpage;
