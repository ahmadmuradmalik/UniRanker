import Button from 'react-bootstrap/Button';

function TagButton() {
  return (
    <>
      <Button variant="outline-primary">Classes</Button>{' '}
      <Button variant="outline-info">Housing</Button>{' '}
      <Button variant="outline-success">Social</Button>{' '}
      <Button variant="outline-warning">Food</Button>{' '}
      <Button variant="outline-danger">Misc</Button>{' '}

    </>
  );
}

export default TagButton;