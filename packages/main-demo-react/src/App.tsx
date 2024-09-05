import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

function App(): JSX.Element {
  return (
    <>
      <button
        onClick={(e) => {
          console.log(e);
        }}
      >
        demo
      </button>
      <p></p>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
