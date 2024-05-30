import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Root from "./components/RootLayout";
import ErrorBoundary from "./util/errorEl";
import NotFoundPage from "./pages/NotFoundPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    errorElement: <ErrorBoundary />,
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
