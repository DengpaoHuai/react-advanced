import { PlanetResponse } from "../types/planet";

const waitTime = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getPlanets = async (page: number) => {
  await waitTime(4000);
  const response = await fetch("https://swapi.dev/api/planets?page=" + page);
  const data: PlanetResponse = await response.json();
  return data;
};
