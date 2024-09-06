import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import useFetch from "../hooks/useFetch";
import PlanetsList from "../pages/PlanetsList.custom-hooks";

// Mock de useFetch
vi.mock("../hooks/useFetch");

describe("PlanetsList Component", () => {
  it("affiche 'Loading...' lorsque les données sont en cours de chargement", () => {
    // Simuler l'état de chargement
    (useFetch as Mock).mockReturnValue({
      loading: true,
      error: null,
      data: null,
    });

    render(<PlanetsList />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("affiche un message d'erreur lorsque le fetch échoue", () => {
    // Simuler une erreur
    (useFetch as Mock).mockReturnValue({
      loading: false,
      error: "Failed to fetch data",
      data: null,
    });

    render(<PlanetsList />);
    expect(screen.getByText("Failed to fetch data")).toBeInTheDocument();
  });

  it("affiche la liste des planètes lorsque les données sont chargées", () => {
    // Simuler des données de planètes
    (useFetch as Mock).mockReturnValue({
      loading: false,
      error: null,
      data: {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Tatooine",
            rotation_period: "23",
            orbital_period: "304",
            diameter: "10465",
            climate: "arid",
            gravity: "1 standard",
            terrain: "desert",
            surface_water: "1",
            population: "200000",
          },
        ],
      },
    });

    render(<PlanetsList />);
    expect(screen.getByText("Tatooine")).toBeInTheDocument();
    expect(screen.getByText("Rotation Period: 23")).toBeInTheDocument();
  });
});
