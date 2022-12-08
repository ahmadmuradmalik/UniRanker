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

  let webpageId = "a0";
  let webpageName = "University of California, Berkeley";

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
                  <h1 className="schoolName">{webpageName}</h1>
                  <Row>
                    <p className="schoolInfo">The University of California, Berkeley is a public land-grant research university in Berkeley, California. Established in 1868 as the University of California, it is the state's first land-grant university and the founding campus of the University of California system.</p>
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
