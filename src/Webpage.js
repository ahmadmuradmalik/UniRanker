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

function Webpage() {
  return (
    <div>
      <Row><HomeNav/></Row>
      <Row>
        <Col xs={2}>
          <Sidebar/>
        </Col>
        <Col className="mainSec">
          <Row>
              <School></School>
          </Row>
          <Row>
            <BoxInput ></BoxInput>
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
