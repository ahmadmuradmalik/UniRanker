import { Link } from 'react-router-dom';
//import './styles/components.css'
import HomeNav from './Components/HomeNav.js';
import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
//import { withRouter } from "react-router";
import Sidebar from "./Components/Sidebar.js";
import Input from "./Components/Input.js";
import BoxInput from "./Components/BoxInput.js";
import Tag from "./Components/Tag.js";
import TagDropdown from "./Components/TagDropdown.js";
import './Components/Components.css'

const my_Profile_Picture = "./profilePicture.jpg";

function Webpage(props) {
  return (
    <div>
      <Row><HomeNav/></Row>
      <Row>
        <Col xs={3}>
          <Sidebar/>
        </Col>
        <Col className="mainSec">
          <img alt="" src="" ></img>
          <h1>Name of School</h1>
          <BoxInput></BoxInput>
          <Container>
            Insert Comments Here
          </Container>
        </Col>
      </Row>
    </div>
  );
}



export default Webpage;
