import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TeamsPage from "./pages/TeamsPage"
import MatchesPage from "./pages/MatchesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TeamsPage />
  }, {
    path: "/matches",
    element: <MatchesPage />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
