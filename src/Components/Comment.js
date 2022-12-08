import { Container, Row, Col } from "react-bootstrap";
import './Components.css';
import TagButton from './TagButton.js';
import Tag from './Tag.js';
import TagSection from "./TagSection";

function Comment({commentText, classes, social, rent, food, misc}) {

    let tagArr = [classes, social, rent, food, misc];

  return (
    <Container className="comment">
        <img className="profilePic" alt="" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
        <Row>
            <div className="commentInfo">
                <h3 className="username">Name</h3>
                <p className="commentPara">{commentText}</p>
                <TagSection tags={tagArr}/>
            </div>
        </Row>
        
    </Container>
    
    );
}

export default Comment;
