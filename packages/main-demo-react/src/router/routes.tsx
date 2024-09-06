import { createBrowserRouter } from "react-router-dom";
import PlanetsList from "../pages/PlanetsList";
import LoginScreen from "../pages/LoginScreen";
import { authMiddleware } from "./loaderActions/authMiddleware";
import PlanetsListBis from "../pages/PlanetsList.custom-hooks";
import { preloadPlanets } from "./loaderActions/preloadPlanets";
import { preloadPlanetsQuery } from "./loaderActions/preloadPlanetsQuery";
import SuperScroll from "../pages/SuperScroll";
import { Suspense } from "react";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen></LoginScreen>,
  },
  {
    loader: authMiddleware,
    children: [
      {
        //loader: preloadPlanetsQuery,
        path: "/",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <PlanetsList></PlanetsList>,
          </Suspense>
        ),
      },
      {
        // loader: preloadPlanets,
        path: "/planets",
        element: <PlanetsListBis></PlanetsListBis>,
      },
      {
        path: "/scroll",
        errorElement: <PlanetsListBis></PlanetsListBis>,
        element: <SuperScroll></SuperScroll>,
      },
    ],
  },
]);

export default router;
