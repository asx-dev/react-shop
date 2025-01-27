import Container from "react-bootstrap/Container";
import Slider from "../components/Slider";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";
const Homepage = () => {
  return (
    <>
      <Slider />
      <section id="products">
        <Container>
          <Products />
          <CallToAction />
        </Container>
      </section>
    </>
  );
};

export default Homepage;
