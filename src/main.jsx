import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Home.jsx";
import KalkulatorBmi from "./KalkulatorBmi.jsx";
import PrediksiKelahiran from "./PrediksiKelahiran.jsx";
import KalkulatorSiklusTidur from "./KalkulatorSiklusTidur.jsx";
import CardGame from "./CardGame.jsx";
import TesButaWarna from "./TesButaWarna.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/kalkulatorbmi",
    element: <KalkulatorBmi />,
  },
  {
    path: "/cardgame",
    element: <CardGame />,
  },
  {
    path: "/prediksikelahiran",
    element: <PrediksiKelahiran />,
  },
  {
    path: "/kalkulatorsiklustidur",
    element: <KalkulatorSiklusTidur />,
  },
  {
    path: "/tesbutawarna",
    element: <TesButaWarna />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
