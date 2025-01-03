import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, removeFromCart } from "../features/cart/cartSlice";
import { BsCartX } from "react-icons/bs";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
              {item.name} - {item.price}$
              <Button
                variant="danger"
                onClick={() => dispatch(removeFromCart(item.name))}
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
