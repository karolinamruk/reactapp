import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 rounded"
    >
      <Navbar.Brand as={NavLink} to="/" className="me-auto ms-4">
        Blog.app
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} to="/" className="me-2">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about" className="me-4">
          About
        </Nav.Link>
      </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default NavBar;
