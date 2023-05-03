import {
  createHashRouter,
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Definition from "./pages/Definition";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:word",
      element: <Definition />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
