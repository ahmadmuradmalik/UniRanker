import { Container } from "react-bootstrap";
import './Components.css'
import Comment from "./Comment";

function CommentBox() {

  return (
    <Container className="commentDiv">
      <Comment/>
    </Container>
    
    );
}

export default CommentBox;
