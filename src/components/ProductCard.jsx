import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsCart2, BsHeart } from "react-icons/bs";
const ProductCard = ({ product }) => {
  return (
    <Col
      md={6}
      lg={4}
      key={product.id}
      className="d-flex justify-content-center"
    >
      <Card style={{ width: "18rem" }} className="shadow mx-auto mx-md-0">
        <Card.Img variant="top" src={product.image} width={300} height={200} />
        <Card.Body>
          <Card.Title>
            {product.name.length > 23
              ? product.name.slice(0, 20) + "..."
              : product.name}
          </Card.Title>
          <Card.Text>
            {" "}
            {product.description.length > 60
              ? product.description.slice(0, 60) + "..."
              : product.description}
          </Card.Text>
          <div className="d-flex align-items-center justify-content-between">
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
            </div>
            <p className="m-0 fs-5">
              <b>{product.price}$</b>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
