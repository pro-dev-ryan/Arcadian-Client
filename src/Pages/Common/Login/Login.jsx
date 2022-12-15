import React from "react";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextAuthentication } from "../../../Contexts/Context/AuthContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";
import SmallLoader from "../../../components/smallLoader/SmallLoader";
import { useState } from "react";

const Login = () => {
  const [loader, setLoader] = useState(false);
  useTitle("Login");
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { login, signUpGoogly } = useContext(ContextAuthentication);
  const logme = (data) => {
    const email = data.email;
    const password = data.pass;
    setLoader(true);
    fetch(`https://arcadian-server.vercel.app/loginuser?email=${email}`)
      .then((res) => res.json())
      .then((resolve) => {
        if (resolve.status) {
          login(email, password)
            .then((res) => {
              if (res?.user) {
                fetch(
                  `https://arcadian-server.vercel.app/issueToken?email=${res?.user?.email}`
                )
                  .then((res) => res.json())
                  .then((resolved) => {
                    if (resolved?.status) {
                      localStorage.setItem("userTicket", resolved.token);
                      setLoader(false);

                      reset();
                      toast("succesfully Logged in");
                      return navigate(from, { replace: true });
                    }
                  })
                  .catch((err) => {
                    setLoader(false);
                    toast.error(`${err?.message || err?.statusText}`);
                    console.error(err);
                  });
              }
            })

            .catch((err) => {
              setLoader(false);
              toast.error(`${err?.message || err?.statusText}`);
              console.log(err);
            });
        }
        // setLoader(false);
        // toast.error(`${resolve?.message}`);
      });
  };

  const social = () => {
    setLoader(true);
    signUpGoogly()
      .then((res) => {
        if (res?.user) {
          const userData = {
            name: res?.user?.displayName,
            email: res?.user?.email,
            url: res?.user?.photoURL,
          };
          fetch("https://arcadian-server.vercel.app/users", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then((res) => res.json())
            .then((resolved) => {
              if (resolved?.status) {
                fetch(
                  `https://arcadian-server.vercel.app/issueToken?email=${res?.user?.email}`
                )
                  .then((res) => res.json())
                  .then((resolved) => {
                    if (resolved?.status) {
                      localStorage.setItem("userTicket", resolved.token);
                      setLoader(false);
                      navigate("/");
                      reset();
                    }
                  })
                  .catch((err) => {
                    setLoader(false);
                    console.error(err);
                  });
              }
            });
          toast.success("succesfully Logged in");
        }
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };
  return (
    <div className="lg:mx-8 mx-1 flex flex-col justify-center items-center">
      <div className="md:w-96 w-full border-2 border-primary border-opacity-10 bg-base-100 lg:my-10 my-5 flex flex-col gap-1 lg:gap-5 shadow-lg rounded-xl">
        <h3 className="text-center uppercase mt-5 lg:mt-16">Login</h3>
        <div>
          <form
            onSubmit={handleSubmit(logme)}
            className="lg:m-3 lg:p-5 m-3 p-2 "
          >
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <div className="w-full">
                <input
                  {...register("email")}
                  className="w-full lowercase"
                  type="email"
                  placeholder="type here"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-2">
              <label htmlFor="password">Password</label>
              <div className="w-full">
                <input
                  {...register("pass")}
                  className="w-full normal-case"
                  type="text"
                  placeholder="type here"
                />
              </div>
            </div>
            <div>
              <button className="btn-prime relative mt-10 w-full">
                {loader ? <SmallLoader /> : "Login"}
              </button>
            </div>
            <p className="text-base ">
              New Here?{" "}
              <span>
                <Link
                  className="font-semibold font-link text-primary"
                  to="/signup"
                >
                  Register
                </Link>
              </span>{" "}
              From Here!!!
            </p>
          </form>
          <div className="divider my-5">OR</div>
          <p className="text-center text-xl font-medium font-text mb-5">
            Login With Social Accounts
          </p>
          <div>
            <div className="flex justify-center mt-5 gap-7 mb-10">
              <button>
                {" "}
                <ImFacebook size={25} color="royalBlue" />{" "}
              </button>
              <button>
                {" "}
                <ImTwitter size={28} color="skyBlue" />{" "}
              </button>
              <button onClick={social}>
                {" "}
                <FcGoogle size={28} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
