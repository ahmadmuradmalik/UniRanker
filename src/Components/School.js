import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const my_Profile_Picture = "./profilePicture.jpg";

/* function School() {
  const disablePersonalWebsiteLink = (e) => {
      // Q3: Check Thursday's lecture. Using "e", how do we stop the link from working? 
      e.preventDefault()
  }
  return (
        <div className="App">

                      <h3 className="app_topHeader">This is my Schools List Page</h3>
                      <h4 className="app_author">ayo</h4>

                    </div>
                    );
  }

export default School; */

// bootstrap card and grid layout

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
