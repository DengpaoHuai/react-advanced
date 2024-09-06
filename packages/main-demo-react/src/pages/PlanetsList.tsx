import { useSuspenseQuery } from "@tanstack/react-query";
import { getPlanets } from "../services/planet";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";

const PlanetsList = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  const [page, setPage] = useState(1);
  const {
    data: planets,
    isLoading,
    error,
  } = useSuspenseQuery({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
  });

  useEffect(() => {
    const listen = (e: Event) => {
      console.log(e);
    };
    addEventListener("scroll", listen);
    return () => {
      removeEventListener("scroll", listen);
    };
  }, []);

  return (
    <div>
      <p>Bonjour {user?.nom}</p>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        navigate
      </button>
      <Link to="/scroll">scroll</Link>
      <Link to="/planets">planets</Link>
      <Link to="/login">login</Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {planets?.results.map((planet, index) => (
        <div key={planet.url} data-testId={planet.url}>
          <h1>{planet.name}</h1>
          <p>Rotation Period: {planet.rotation_period}</p>
          <p>Orbital Period: {planet.orbital_period}</p>
          <p>Diameter: {planet.diameter}</p>
          <p>Climate: {planet.climate}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p>Population: {planet.population}</p>
        </div>
      ))}
      <button onClick={() => setPage((prev) => prev - 1)}>Previous Page</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
    </div>
  );
};

export default PlanetsList;
