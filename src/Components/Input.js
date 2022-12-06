import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Input() {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Write your comment here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Submit
        </Button>
      </InputGroup>

    </>
  );
}

export default Input;