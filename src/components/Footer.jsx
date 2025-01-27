import Container from "react-bootstrap/Container";
const Footer = () => {
  return (
    <footer>
      <Container
        fluid
        className="text-center bg-black text-light p-4 d-flex align-items-center justify-content-center"
      >
        <small>
          &copy; 2025 Ecommerce Store. Anthony Sandoval | Develop by asx-dev
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
