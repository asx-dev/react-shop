import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
const Products = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Pagination --------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  let items = [];
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = productList.slice(firstItem, lastItem);

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  // ----------------------------------------------------------------

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        if (isMounted) setProductList(data);
      } catch (error) {
        if (isMounted) console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
    return () => (isMounted = false);
  }, []);

  return (
    <Container>
      <h1 className="text-center text-lg-start mb-2" id="products">
        Products
      </h1>
      {isLoading && <Loader />}
      <Row className="row-gap-3">
        {currentItems.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Row>
      <Pagination className="mt-4">{items}</Pagination>
    </Container>
  );
};

export default Products;
