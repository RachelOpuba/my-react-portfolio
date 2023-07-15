import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
