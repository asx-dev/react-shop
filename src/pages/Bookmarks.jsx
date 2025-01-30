import Container from "react-bootstrap/Container";
import ProductCard from "../components/ProductCard";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
const Bookmarks = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  return (
    <Container className="mt-5 pt-2" style={{ height: "100vh" }}>
      <h2 className="text-center text-lg-start mb-2">Saved Items</h2>
      <Row className="row-gap-3">
        {bookmarks.value.length === 0 && (
          <h3 className="text-center">No saved items</h3>
        )}
        {bookmarks.value.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Row>
    </Container>
  );
};

export default Bookmarks;
