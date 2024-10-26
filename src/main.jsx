import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Home.jsx";
import Bmi from "./Bmi.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/imt",
    element: <Bmi/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
