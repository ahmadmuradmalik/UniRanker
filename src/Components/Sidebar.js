import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './Components.css'

const Sidebar = props => {
   
    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
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
  //const Sidebar = withRouter(Side);
  export default Sidebar