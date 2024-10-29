import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Home.jsx";
import Bmi from "./Bmi.jsx";
import PrediksiKelahiran from "./PrediksiKelahiran.jsx";
import CardGame from "./CardGame.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/imt",
    element: <Bmi />,
  },
  {
    path: "/cardgame",
    element: <CardGame />,
  },
  {
    path: "/prediksikelahiran",
    element: <PrediksiKelahiran />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
