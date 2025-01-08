import Slider from "../components/Slider";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";
import Container from "react-bootstrap/Container";
const Homepage = () => {
  return (
    <div className="mt-4 py-3">
      <Slider />
      <Container>
        <Products />
        <CallToAction />
      </Container>
    </div>
  );
};

export default Homepage;
