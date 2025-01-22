import Container from "react-bootstrap/Container";
import Slider from "../components/Slider";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <>
      <Slider />
      <Container>
        <Products />
        <CallToAction />
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
