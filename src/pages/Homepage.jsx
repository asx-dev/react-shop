import Slider from "../components/Slider";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";
import Container from "react-bootstrap/Container";
const Homepage = () => {
  return (
    <>
      <Slider />
      <Container>
        <Products />
        <CallToAction />
      </Container>
    </>
  );
};

export default Homepage;
