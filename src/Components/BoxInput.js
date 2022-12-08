import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import TagButton from './TagButton.js'
import './Components.css';
//import { db } from '../Firebase';
import {useState} from 'react';

function TextControlsExample({saveComment, saveTag}) {
    const [input, setInput] = useState();
    
    // Push Function
    const handleSubmit = (e) => {
        e.preventDefault();
        saveComment(input);
        setInput(" ");
    };

    return (
        <Container>
            <Form className="boxInput">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control onChange={(e) => setInput(e.target.value)} className="test" placeholder="Write a comment..." as="textarea" rows={3} />
                </Form.Group>
                <TagButton className="tagButton" saveTag={saveTag}></TagButton>

                <Button onClick={handleSubmit} className="submitComment" variant="outline-secondary" id="button-addon2">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default TextControlsExample;