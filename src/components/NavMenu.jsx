import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
function NavMenu() {
  return (
    <Navbar expand="lg" fixed="top" bg="primary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Ecommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to={"/products"}>
              Products
            </Nav.Link>

            <Nav.Link as={NavLink} to={"/favorites"}>
              Favorites
            </Nav.Link>

            <Nav.Link as={NavLink} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
