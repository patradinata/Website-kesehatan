import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Home.jsx";
import Imt from "./Imt.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/imt",
    element: <Imt/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
