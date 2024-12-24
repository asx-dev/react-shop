import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import MainLayout from "../src/layouts/MainLayout";
import "./styles.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
