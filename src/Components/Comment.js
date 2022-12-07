import { Container, Row, Col } from "react-bootstrap";
import './Components.css';
import TagButton from './TagButton.js';
import Tag from './Tag.js';

function Comment(props) {
  const { text } = props;

  return (
    <Container className="comment">
        <img className="profilePic" alt="" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
        <Row>
            <div className="commentInfo">
                <h3 className="username">Name</h3>
                <p className="commentPara">Comments</p>
                <p className="commentPara">{text}</p>
            </div>
        </Row>
        <Row>
            <TagButton></TagButton>
        </Row>
        
    </Container>
    
    );
}

export default Comment;
