import Dropdown from 'react-bootstrap/Dropdown';

function Tag() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">School</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Food</Dropdown.Item>
        <Dropdown.Item href="#/action-3"></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Tag;