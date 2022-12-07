import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './Components.css'

function Sidebar() {
   
    return (
        <>
    
            <Nav className="col-md-2 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <div className="sidebar-sticky"></div>
            <Nav.Item className="item">
                <Nav.Link eventKey="classes">Classes</Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
                <Nav.Link eventKey="housing">Housing</Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
                <Nav.Link eventKey="Social">Social</Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
                <Nav.Link eventKey="food">Food</Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
                <Nav.Link eventKey="misc"> Misc </Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };

  function clickClass(){
    return(
        <div></div>
        //comments are changed to their needed tags
    );
  };

  export default Sidebar