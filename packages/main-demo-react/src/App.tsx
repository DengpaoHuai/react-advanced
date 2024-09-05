import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContextProvider from "./contexts/UserContextProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      gcTime: 1000 * 60 * 10,
    },
  },
});

function App(): JSX.Element {
  return (
    <>
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
