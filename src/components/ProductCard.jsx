import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsFillHeartFill, BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart, saveCartToStorage } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

import Image from "react-bootstrap/Image";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addToCart({ name: product.name, price: product.price, qty: 1 }));
    dispatch(saveCartToStorage());
    toast.success(`Product added to cart!`, {
      position: "bottom-right",
      theme: "dark",
      autoClose: 3000,
    });
  };

  return (
    <Col xs={6} sm={4} md={3} lg={2} key={product.id}>
      <div className="d-flex flex-column align-items-center align-items-md-start gap-1">
        <div className="position-relative product-image-container">
          <Image
            src={product.image}
            rounded
            className="shadow-sm product-image"
          />
          <Button
            variant="outline-primary"
            className="d-flex align-items-center gap-1 position-absolute bottom-0 end-0 m-1"
            onClick={addProductToCart}
          >
            <BsCartPlusFill />
          </Button>
          <Button
            variant="outline-danger"
            className="d-flex align-items-center gap-1 position-absolute bottom-0 start-0 m-1"
          >
            <BsFillHeartFill />
          </Button>
        </div>
        <p className="m-0">{product.name}</p>
        <p className="m-0">
          <strong>{product.price}$</strong>
        </p>
      </div>
    </Col>
  );
};

export default ProductCard;
