import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap'


function School() {
  return (
        <div className="App">
          <div className="schoolInfoDiv">
                <img className="schoolPic" alt="" src="https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg" ></img>
                <h1 className="schoolName">Name of School</h1>
                <Row>
                  <p className="schoolInfo">School Description</p>
                </Row>
          </div>

        </div>
    );
  }

export default School;
