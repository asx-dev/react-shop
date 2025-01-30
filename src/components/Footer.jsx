import Container from "react-bootstrap/Container";
const Footer = () => {
  return (
    <footer>
      <Container
        fluid
        className="text-center bg-black text-light p-4 d-flex flex-column gap-3 align-items-center justify-content-center"
      >
        <small>&copy; 2025 Anthony Sandoval | Develop by asx-dev</small>
        <div className="footer__socials-links">
          <a
            href="https://github.com/asx-dev"
            target="_blank"
            className="footer__socials"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-sandoval-dev/"
            target="_blank"
            className="footer__socials"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://wa.me/34638948846?text=Hello%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20about%20job%20opportunities.
          "
            className="footer__socials"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
