import { createBrowserRouter } from "react-router-dom";
import PlanetsList from "../pages/PlanetsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetsList></PlanetsList>,
  },
]);

export default router;
