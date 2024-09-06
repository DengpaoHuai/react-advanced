import { useQuery } from "@tanstack/react-query";
import { Planet } from "../types/planet";

const SuperScroll = () => {
  const { data } = useQuery({
    queryKey: ["planets"],
    queryFn: () =>
      fetch("https://swapi.dev/api/planets").then((res) => res.json()),
  });

  return (
    <div>
      <h1>Super Scroll</h1>
      <div style={{ height: "100vh", overflow: "auto" }}>
        {data?.result.map((planet: Planet, index: number) => (
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
        <div style={{ height: "200vh" }}>
          <h1>Scroll Me</h1>
        </div>
      </div>
    </div>
  );
};

export default SuperScroll;
