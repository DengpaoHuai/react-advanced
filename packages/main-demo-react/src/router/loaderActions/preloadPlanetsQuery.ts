import { queryClient } from "../../App";
import { getPlanets } from "../../services/planet";

export const preloadPlanetsQuery = async () => {
  await queryClient.prefetchQuery({
    queryKey: ["planets"],
    queryFn: () => getPlanets(1),
  });
  return true;
};
