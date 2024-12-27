import { Outlet } from "react-router";
import NavMenu from "../components/NavMenu";
import { ToastContainer } from "react-toastify";
const MainLayout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
