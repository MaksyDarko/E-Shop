import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Layout from "./layout/Layout";
import ShoppingCart from "./pages/ShoppingCart";
import ErrorPage from "./layout/ErrorPage";
import { Redirect } from "react-router";

const routes = createBrowserRouter(
  [
    // {
    //   path: "/",
    //   element: <Redirect to="E-Shop" />,
    // },
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <ShoppingCart />,
        },
      ],
    },
  ],
  { basename: "/E-Shop" }
);

export default routes;
