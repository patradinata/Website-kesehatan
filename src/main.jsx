import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Home.jsx";
import KalkulatorBmi from "./KalkulatorBmi.jsx";
import PrediksiKelahiran from "./PrediksiKelahiran.jsx";
import KalkulatorSiklusTidur from "./KalkulatorSiklusTidur.jsx";
import CardGame from "./MemoryCardGame.jsx";
import TesButaWarna from "./TesButaWarna.jsx";
import Meditasi from "./Meditasi.jsx";

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
    path: "/memorycardgame",
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
  {
    path: "/meditasi",
    element: <Meditasi />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
