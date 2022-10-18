import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Container fluid>
      <Navbar expand="lg" variant="light" bg="warning">
        <Container>
          <Navbar.Brand href="#">Code Diaries</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;