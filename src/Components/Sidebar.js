import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './Components.css'

function Sidebar({saveTab}) {
   
    //have button alert button and then send all the way up
    const clickTab = (selectedKey) => {
        // connect back to webapge, check boxinput button
        console.log(`changed to ${selectedKey}`)
        saveTab(selectedKey);
    };

    //change sidebar to not block

    return (
        <>
    
            <Nav className="col-md-2 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => clickTab(selectedKey)}
            >
            <div className="sidebar-sticky"></div>
            <Nav.Item className="item">
                <Nav.Link eventKey="all">All</Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
                <Nav.Link eventKey="classes">Classes</Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
                <Nav.Link eventKey="rent">Housing</Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
                <Nav.Link eventKey="social">Social</Nav.Link>
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

  export default Sidebar