import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Components.css'

function HomeNav() {
  return (
    <>
      <Navbar className="nav" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">UniRanker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="main">MainDisplayPage</Nav.Link>
            <Nav.Link href="Schools">Schools</Nav.Link>
            <Nav.Link href="Login">Sign Up/Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default HomeNav;