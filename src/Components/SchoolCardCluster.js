import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './Components.css';
import TagButton from "./TagButton";
import './Components.css'

function CardCluster({schoolName, savePage, schoolLink}) {
  let link = "";
    if (schoolLink === "a0"){
      link = '/a0';
    } else if(schoolLink === "a1"){
      link = '/a1';
    }else if(schoolLink === "a2"){
      link = '/a2';
    }

  const clickPage = (e, scLink) => {
      savePage(scLink);
  };

  return (
// bootstrap card and grid layout

    <Container className="school">

        <Row className="g-4">
    
        <Col>
          <Card className="carta">
            <Card.Body>
              <Card.Link href={link}>
                <button onClick={(e) => clickPage(e, {schoolLink})} type="button" id="primaryButton"class="btn btn-primary btn-lg btn-block">{schoolName}</button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
    </Row>

    </Container>
    
    );
}

export default CardCluster;