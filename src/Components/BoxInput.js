import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Tag from './Tag.js'

function TextControlsExample() {
  return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>

        <Tag></Tag>

        <Button variant="outline-secondary" id="button-addon2">
            Submit
        </Button>
    </Container>

  );
}

export default TextControlsExample;