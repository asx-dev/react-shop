import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";
import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import { useState } from "react";
function NavMenu() {
  const dispatch = useDispatch();
  const [scrollY, setScrollY] = useState(0);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrollY > 50 ? "navbar-custom" : ""}
    >
      <Container>
        <Navbar.Brand>Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/bookmarks">
              Favorites
            </Nav.Link>

            <Nav.Link as="a" href="#" onClick={() => dispatch(toggleCart())}>
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavMenu;
