import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { ContextAuthentication } from "../../../../Contexts/Context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(ContextAuthentication);
  const handleSignout = () => {
    logout()
      .then(() => toast.success(`${user?.displayName} is Logged Out`))
      .catch((err) => console.log(err));
  };

  const MenuItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/"
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/shop"
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      {!user?.email && (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/login"
            >
              Sign In
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-primary lg:px-8">
      <div className="lg:navbar-start flex justify-between w-full">
        <div className="dropdown">
          <label tabIndex={0} className="btn-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-base-100 rounded-box w-52"
          >
            {MenuItems}
          </ul>
        </div>

        <Link to="/" className="text-accent capitalize lg:text-2xl">
          Arcadian
        </Link>
        <div className="navbar-center lg:hidden">
          <div className="dropdown dropdown-end">
            {user?.email && (
              <>
                <label tabIndex={0} className="btn-circle avatar">
                  <div className="w-6 rounded-full">
                    <img
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://placeimg.com/80/80/people"
                      }
                    />
                  </div>
                </label>
              </>
            )}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/dashboard">
                  {user?.displayName && user?.displayName} Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleSignout}>Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-base-100">{MenuItems}</ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="dropdown dropdown-end">
          {user?.email && (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-24 mask mask-squircle">
                  <img
                    src={
                      user?.photoURL
                        ? `${user.photoURL}`
                        : "https://placeimg.com/80/80/people"
                    }
                  />
                </div>
              </label>
            </>
          )}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="my-2">
                {user?.displayName && user?.displayName} Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="my-2" onClick={handleSignout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
