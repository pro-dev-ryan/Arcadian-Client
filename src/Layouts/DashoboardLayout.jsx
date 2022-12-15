import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdMore } from "react-icons/md";
import { ContextAuthentication } from "../Contexts/Context/AuthContext";
const DashoboardLayout = () => {
  const { logout, user } = useContext(ContextAuthentication);
  const handleLogout = () => {
    logout()
      .then(() => toast.success(`${user?.displayName} Logged Out`))
      .catch((err) => {
        toast.error("Not Logged Out");
      });
  };
  return (
    <div className="drawer">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content mx-5 mt-5 lg:mx-20">
        <label htmlFor="dashboard-drawer" className="">
          <MdMore size={32} color="#572435" />
        </label>
        <div className="mt-2">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 lg:w-80 md:w-60 sm:w-40 w-[70%] bg-primary bg-opacity-95">
          <li>
            <img className="w-1/2 mx-auto" src="/favicon.ico" alt="logo" />
            <span className="text-accent mx-auto lg:text-2xl text-xl font-medium font-heading ">
              Arcadian
            </span>
          </li>
          <li>
            <Link className="text-base-100" to="/dashboard/myorders">
              My Orders
            </Link>
          </li>
          <li>
            <Link className="text-base-100" to="/dashboard/seller/allproducts">
              All Products
            </Link>
          </li>
          <li>
            <Link className="text-base-100" to="/dashboard/seller/addproduct">
              Add Product
            </Link>
          </li>
          <li>
            <Link className="text-base-100" to="/dashboard/admin/allusers">
              All Users
            </Link>
          </li>
          <li>
            <Link className="text-base-100" to="/dashboard/admin/reported">
              Reported Products
            </Link>
          </li>
          <li>
            <div className="lg:mt-40 md:mt-24 mt-10 flex flex-col lg:flex-row  lg:gap-10">
              <Link to="/">Back To Home</Link>
              <Link onClick={handleLogout}>Sign Out</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashoboardLayout;
