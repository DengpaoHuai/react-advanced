import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "../services/planet";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";

const PlanetsList = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [page, setPage] = useState(1);
  const {
    data: planets,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
  });

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
      <Link to="/login">login</Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {planets?.results.map((planet, index) => (
        <div key={index}>
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
