import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './Components.css'

function Sidebar() {
   
    return (
        <>
    
            <Nav className="col-md d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item className="item">
                <Nav.Link eventKey="classes">Classes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="food">Food</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="housing">Housing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="misc"> Misc </Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };

  export default Sidebar