import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Container fluid>
      <Navbar expand="lg" variant="light" bg="warning">
        <Container>
          <Navbar.Brand href="/">Code Diaries</Navbar.Brand>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/about" >About </NavLink>
          <NavLink to="/profile" >Profile </NavLink>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;