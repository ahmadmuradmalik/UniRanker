import { Container } from "react-bootstrap";
import './Components.css'
import Comment from "./Comment";

function CommentBox({comments}) {
  /*{comments.map((comment) => (
          <li key={comment.id}>
            {comment.item}
          </li>

       ))}*/

   
    return(
      <Container className="commentDiv">
          {comments?.map((comment) => (
              <Comment key={comment.docID} commentText={comment.text}>
              </Comment>
          ))}
        </Container>
      );
    

    // listComments is a function that finds all the entries written by a user!
}

export default CommentBox;
