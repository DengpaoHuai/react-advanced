import useFetch from "../hooks/useFetch";

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
};

type PlanetResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

const PlanetsList = () => {
  const {
    loading,
    error,
    data: planets,
  } = useFetch<PlanetResponse>("https://swapi.dev/api/planets/");

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
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
    </div>
  );
};

export default PlanetsList;
