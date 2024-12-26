import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
function NavMenu() {
  return (
    <Navbar expand="lg" bg="primary" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-light">
          Ecommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="text-light">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to={"/products"} className="text-light">
              Products
            </Nav.Link>

            <Nav.Link as={NavLink} to={"/favorites"} className="text-light">
              Favorites
            </Nav.Link>

            <Nav.Link as={NavLink} to="/cart" className="text-light">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
