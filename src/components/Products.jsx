import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsCart2, BsHeart } from "react-icons/bs";
import { useState, useEffect } from "react";

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        if (isMounted) setProductList(data);
      } catch (error) {
        if (isMounted) console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
    return () => (isMounted = false);
  }, []);

  return (
    <Container className="pb-5">
      <h1 className="text-center text-lg-start" id="products">
        # Products
      </h1>
      <Row className="row-gap-3 pb-4">
        {productList.map((product) => {
          return (
            <Col md={6} lg={4} key={product.id}>
              <Card
                style={{ width: "18rem" }}
                className="shadow mx-auto mx-md-0"
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  width={300}
                  height={300}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="d-flex gap-1">
                    <Button
                      variant="primary"
                      className="d-flex align-items-center gap-1"
                    >
                      <BsCart2 />
                      Buy
                    </Button>
                    <Button
                      variant="danger"
                      className="d-flex align-items-center gap-1"
                    >
                      <BsHeart />
                      Save
                    </Button>
                    <Button
                      variant="success"
                      className="d-flex align-items-center gap-1"
                    >
                      {product.price} $
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
