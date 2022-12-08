import { Container } from "react-bootstrap";
import './Components.css'
import CardCluster from "./SchoolCardCluster.js";

function SchoolCard({schools}) {

  return (
    <Container className="schoolDiv">
      {schools?.map((school) => (
          <CardCluster key={school.docID} schoolName={school.name}>
          </CardCluster>
       ))}
    </Container>
    
    );

    // listComments is a function that finds all the entries written by a user!
}

export default SchoolCard;