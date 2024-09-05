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

export const getPlanets = async (page: number) => {
  const response = await fetch("https://swapi.dev/api/planets?page=" + page);
  const data: PlanetResponse = await response.json();
  return data;
};
