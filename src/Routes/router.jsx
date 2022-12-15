import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Blog from "../Pages/Basic/Blog/Blog";
import Home from "../Pages/Basic/Home/Home";
import Booking from "../Pages/Basic/Shop/Book/Booking";
import Category from "../Pages/Basic/Shop/Category/Category";
import Shop from "../Pages/Basic/Shop/Shop";
import Single from "../Pages/Basic/Shop/SingleProduct/Single";
=======
import DashoboardLayout from "../Layouts/DashoboardLayout";
import Main from "../Layouts/Main";
import Blog from "../Pages/Basic/Blog/Blog";
import Home from "../Pages/Basic/Home/Home";
import Category from "../Pages/Basic/Shop/Category/Category";
import Shop from "../Pages/Basic/Shop/Shop";
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
import Error from "../Pages/Common/Error/Error";
import Login from "../Pages/Common/Login/Login";
import Register from "../Pages/Common/Sign-Up/Register";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import ReportedProduct from "../Pages/Dashboard/Admin/ReportedProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import AllProduct from "../Pages/Dashboard/Seller/AllProduct";
import MyOrders from "../Pages/Dashboard/User/MyOrders";
<<<<<<< HEAD
import AdminRoute from "./Admin/AdminRoute";
=======
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
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
<<<<<<< HEAD
        loader: () => fetch("https://arcadian-server.vercel.app/shop"),
        element: <Shop />,
      },
      {
        path: "/shop/product/:id",
        loader: ({ params }) =>
          fetch(
            `https://arcadian-server.vercel.app/category/product/${params.id}`
          ),
        element: <Single />,
      },
      {
        path: "/shop/book/:id",
        loader: ({ params }) =>
          fetch(`https://arcadian-server.vercel.app/product/${params.id}`),
        element: (
          <PrivateRoute>
            <Booking />
=======
        loader: () => fetch("http://localhost:5000/allproducts"),
        element: (
          <PrivateRoute>
            <Shop />
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
          </PrivateRoute>
        ),
      },
      {
        path: "/shop/category/:type",
        loader: ({ params }) =>
<<<<<<< HEAD
          fetch(
            `https://arcadian-server.vercel.app/shop/category/${params.type}`
          ),
=======
          fetch(`http://localhost:5000/shop/category/${params.type}`),
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
        element: (
          <PrivateRoute>
            <Category />
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
<<<<<<< HEAD
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
=======
    element: <DashoboardLayout />,
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
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
<<<<<<< HEAD
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/reported",
        element: (
          <AdminRoute>
            <ReportedProduct />
          </AdminRoute>
        ),
=======
        element: <AllUsers />,
      },
      {
        path: "/dashboard/admin/reported",
        element: <ReportedProduct />,
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
      },
    ],
  },
]);
