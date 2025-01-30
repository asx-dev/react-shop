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
  const [windowWidth, setWindowWidth] = useState(1200);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrollY > 50 || windowWidth < 1000 ? "navbar-custom" : ""}
    >
      <Container>
        <Navbar.Brand>🎮 JoystickJungle</Navbar.Brand>
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
