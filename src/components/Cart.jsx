import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeFromCart,
  saveCartToStorage,
} from "../features/cart/cartSlice";
import { BsCartX } from "react-icons/bs";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeProductFromCart = (name) => {
    dispatch(removeFromCart(name));
    dispatch(saveCartToStorage());
  };

  return (
    <Offcanvas
      show={cart.isOpen}
      onHide={() => dispatch(toggleCart())}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {!cart.value.length && (
          <h3 className="text-center">Your Cart is Empty</h3>
        )}
        {cart.value.map((item) => {
          return (
            <div
              key={item.name}
              className="shadow-sm p-3 d-flex justify-content-between align-items-center rounded mb-1"
            >
              <div className="d-dlex flex-row gap-1">
                <strong>{item.name}</strong>
                <p className="m-0">Items: {item.qty}</p>
                <p className="m-0">Price: {item.price}$</p>
              </div>
              <Button
                variant="danger"
                onClick={() => removeProductFromCart(item.name)}
              >
                <BsCartX />
              </Button>
            </div>
          );
        })}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
