import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import DashboardPage from "./pages/dashboard.tsx";
import TransactionsList from "./pages/transactions-list.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectToLogin />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/transactions",
    element: <TransactionsList />,
  },
]);

function RedirectToLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
