import { PlanetResponse } from "../types/planet";

export const getPlanets = async (page: number) => {
  const response = await fetch("https://swapi.dev/api/planets?page=" + page);
  const data: PlanetResponse = await response.json();
  return data;
};
