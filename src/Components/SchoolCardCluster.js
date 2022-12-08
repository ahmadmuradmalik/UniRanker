import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './Components.css';
import TagButton from "./TagButton";
import './Components.css'

function CardCluster({schoolName}) {

  return (
// bootstrap card and grid layout

    <Container className="school">

        <Row className="g-4">
    
        <Col>
          <Card className="carta">
            <Card.Body>
              <Card.Link href={link}>
                <button type="button" id="specButton"class="btn btn-primary btn-lg btn-block">{schoolName}</button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
    </Row>

    </Container>
    
    );
}

export default CardCluster;