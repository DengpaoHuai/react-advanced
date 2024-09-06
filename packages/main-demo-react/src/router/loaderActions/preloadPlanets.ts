export const preloadPlanets = async () => {
  const data = await fetch("https://swapi.dev/api/planets");
  const planets = await data.json();
  return planets;
};
