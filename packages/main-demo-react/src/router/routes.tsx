import { createBrowserRouter } from "react-router-dom";
import PlanetsList from "../pages/PlanetsList";
import LoginScreen from "../pages/LoginScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetsList></PlanetsList>,
  },
  {
    path: "/login",
    element: <LoginScreen></LoginScreen>,
  },
]);

export default router;
