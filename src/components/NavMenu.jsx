import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";
import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
function NavMenu() {
  const dispatch = useDispatch();
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

            <Nav.Link as={Button} onClick={() => dispatch(toggleCart())}>
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
