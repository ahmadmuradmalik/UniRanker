import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HomeNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">UniRanker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#schools">Schools</Nav.Link>
            <Nav.Link href="#signup">Sign Up/Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default HomeNav;