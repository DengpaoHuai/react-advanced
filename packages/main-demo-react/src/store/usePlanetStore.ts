import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { create } from "zustand";
import { getPlanets } from "../services/planet";

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

type PlanetStore = {
  planet: Planet[] | null;
  setPlanet: (planet: Planet[]) => void;
};

const usePlanetStore = create<PlanetStore>((set) => ({
  planet: null,
  setPlanet: (planet: Planet[]) => set({ planet }),
}));

const usePlanets = () => {
  const { data } = useQuery({
    queryKey: ["planets"],
    queryFn: () => getPlanets(1),
  });
  const { planet, setPlanet } = usePlanetStore();

  useEffect(() => {
    if (data) {
      setPlanet(data.results);
    }
  }, [data]);

  return {
    planet,
    setPlanet,
  };
};

export default usePlanets;
