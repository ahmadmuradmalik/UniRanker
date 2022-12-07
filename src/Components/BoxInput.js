import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Tag from './TagButton.js'
import './Components.css'

function TextControlsExample() {
  return (
    <Container>
        <Form className="boxInput">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control className="test" placeholder="Write a comment..." as="textarea" rows={3} />
            </Form.Group>
        </Form>

        <Tag className="tagButton"></Tag>

        <Button variant="outline-secondary" id="button-addon2">
            Submit
        </Button>
    </Container>

  );
}

export default TextControlsExample;