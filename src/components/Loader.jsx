import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const Loader = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Spinner
        animation="border"
        variant="primary"
        style={{ width: "8rem", height: "8rem" }}
      />
    </Container>
  );
};

export default Loader;
