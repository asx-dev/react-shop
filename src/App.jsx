import Homepage from "./pages/Homepage";
import Bookmarks from "./pages/Bookmarks";
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
        <Route path="/bookmarks" element={<Bookmarks />} />
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
