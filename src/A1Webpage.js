import { Link } from 'react-router-dom';
//import './styles/components.css'
import HomeNav from './Components/HomeNav.js';
import React, {useState} from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
//import { withRouter } from "react-router";
import Sidebar from "./Components/Sidebar.js";
import Input from "./Components/Input.js";
import BoxInput from "./Components/BoxInput.js";
import TagButton from "./Components/TagButton.js";
import './Components/Components.css'
import CommentBox from './Components/CommentBox.js';
import School from './Components/School.js'
import { useNavigate} from "react-router-dom";


//const my_Profile_Picture = "./profilePicture.jpg";

function Webpage({saveComment, comments, saveTab, saveTag, page}) {

 // const navigate = useNavigate();
  //const data = JSON.stringify(navigate.data);

  //if/else what school return comments related to that school
  //pass those comments into designated place
  //const { state } = this.props.location
  //const [value, setValue] = useState(props.location);

  let webpageId = "a1";
  let webpageName = "University of Southern California";

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
                  <img className="schoolPic" alt="" src="https://alisteducation.com/wp-content/uploads/2020/07/GettyImages-1206596174.jpg" ></img>
                  <h1 className="schoolName">{webpageName}</h1>
                  <Row>
                    <p className="schoolInfo">The University of Southern California is a private research university in Los Angeles, California, United States. Founded in 1880 by Robert M. Widney, it is the oldest private research university in California.</p>
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
