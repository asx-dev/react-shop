import { Outlet } from "react-router";
import NavMenu from "../components/NavMenu";
import { ToastContainer } from "react-toastify";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <>
      <NavMenu />
      <main>
        <Outlet />
      </main>
      <ToastContainer />
      <Cart />
      <Footer />
    </>
  );
};

export default MainLayout;
