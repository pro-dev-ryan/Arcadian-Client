import { createBrowserRouter } from "react-router-dom";
import DashoboardLayout from "../Layouts/DashoboardLayout";
import Main from "../Layouts/Main";
import Blog from "../Pages/Basic/Blog/Blog";
import Home from "../Pages/Basic/Home/Home";
import Shop from "../Pages/Basic/Shop/Shop";
import Error from "../Pages/Common/Error/Error";
import Login from "../Pages/Common/Login/Login";
import Register from "../Pages/Common/Sign-Up/Register";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import ReportedProduct from "../Pages/Dashboard/Admin/ReportedProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import AllProduct from "../Pages/Dashboard/Seller/AllProduct";
import MyOrders from "../Pages/Dashboard/User/MyOrders";
import PrivateRoute from "./Private/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/shop",
        element: (
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashoboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/seller/allproducts",
        element: <AllProduct />,
      },
      {
        path: "/dashboard/seller/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/admin/allusers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/admin/reported",
        element: <ReportedProduct />,
      },
    ],
  },
]);
