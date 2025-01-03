import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import MainLayout from "../src/layouts/MainLayout";
import "./styles.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import { store } from "./app/store";
import { Provider } from "react-redux";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
