import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Basic/Blog/Blog";
import Home from "../Pages/Basic/Home/Home";
import Shop from "../Pages/Basic/Shop/Shop";
import Login from "../Pages/Common/Login/Login";
import Register from "../Pages/Common/Sign-Up/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        element: <Shop />,
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
]);
