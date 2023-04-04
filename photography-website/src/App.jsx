import "./App.css";
import Abstract from "./components/Abstract";
import Animal from "./components/Animal";
import BlackAndWhite from "./components/BlackAndWhite";
import Landscape from "./components/Landscape";
import Potrait from "./components/Potrait";
import Selfie from "./components/Selfie";
import Travel from "./components/Travel";
import Home from "./pages/Home/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RightContent from "./pages/RightContent/RightContent";
import ContextState from "./context/ContextState";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Abstract />,
        },
        {
          path: "/animal",
          element: <Animal />,
        },
        {
          path: "/grayscale",
          element: <BlackAndWhite />,
        },
        {
          path: "/landscape",
          element: <Landscape />,
        },
        {
          path: "/potrait",
          element: <Potrait />,
        },
        {
          path: "/selfie",
          element: <Selfie />,
        },
        {
          path: "/travel",
          element: <Travel />,
        },
        {
          path: "/search",
          element: <RightContent />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <ContextState>
        <RouterProvider router={router} />
      </ContextState>
    </div>
  );
}

export default App;
