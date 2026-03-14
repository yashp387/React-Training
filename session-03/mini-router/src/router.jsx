import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";
import Layout from "./components/Layout";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Admin from "./pages/AdminPage";
import Dashboard from "./pages/DashboardPage";
import Profile from "./pages/ProfilePage";
import Unauthorized from "./pages/UnauthorizedPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/unauthorized", element: <Unauthorized /> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "profile", element: <Profile /> },

          {
            element: <RoleRoute allowedRoles={["admin"]} />,
            children: [
              { path: "admin", element: <Admin /> }
            ]
          }
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
