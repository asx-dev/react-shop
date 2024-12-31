import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";

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
        <ul>
          {!cart.values && <h3 className="text-center">Your Cart is Empty</h3>}
          {cart.value.map((item) => {
            return (
              <li key={item.name}>
                {item.name} - {item.price}$
              </li>
            );
          })}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
