import { Outlet } from "react-router";
import NavMenu from "../components/NavMenu";
import { ToastContainer } from "react-toastify";
import Cart from "../components/Cart";
const MainLayout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
      <ToastContainer />
      <Cart />
    </>
  );
};

export default MainLayout;
