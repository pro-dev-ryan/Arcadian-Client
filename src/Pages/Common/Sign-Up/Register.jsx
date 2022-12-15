import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { imageUploader } from "../../../Functions/imageUploader";
import { useContext } from "react";
import { ContextAuthentication } from "../../../Contexts/Context/AuthContext";
import useTitle from "../../../Hooks/useTitle";
import { useState } from "react";
import SmallLoader from "../../../components/smallLoader/SmallLoader";

const Register = () => {
  const [seller, setSeller] = useState(false);
  const [loader, setLoader] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();
  useTitle("Register");
  const { signUpEP, updateInfo, user } = useContext(ContextAuthentication);
  const handleSign = (data) => {
    setLoader(true);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = data.image[0];
    imageUploader(image).then((data) => {
      const url = data.data.display_url;
      const userData = {
        name,
        email,
        url,
        role: seller,
      };
      signUpEP(email, password)
        .then((res) => {
          if (res?.user) {
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
                  toast.success(`${resolved.message}`);
                  updateInfo(name, url)
                    .then(() => {
                      fetch(
                        `https://arcadian-server.vercel.app/issueToken?email=${email}`
                      )
                        .then((res) => res.json())
                        .then((resolved) => {
                          if (resolved?.status) {
                            localStorage.setItem("userTicket", resolved.token);
                            setLoader(false);
                            navigate("/");
                            reset();
                          }
                        });
                    })
                    .catch((err) => {
                      setLoader(false);
                      toast.error(`${err?.message || err?.statusText}`);
                      console.log(err);
                    });
                } else {
                  toast.error(`${resolved.message}`);
                }
              })
              .catch((err) => {
                setLoader(false);

                console.error(err);
              });
          }
        })
        .catch((err) => {
          setLoader(false);
          toast.error(`${resolved.message}`);
          console.log(err);
        });
    });
  };
  return (
    <div className="lg:mx-8 mx-1 flex flex-col justify-center items-center">
      <div className="md:w-96 w-full border-2 border-primary border-opacity-10 bg-base-100 lg:my-10 my-5 flex flex-col gap-1 lg:gap-5 shadow-lg rounded-xl">
        <h3 className="text-center uppercase mt-5 lg:mt-16">Sign Up</h3>
        <div>
          <form className="lg:m-3 lg:p-5 m-3 p-2 ">
            <div className="flex flex-col w-full">
              <label htmlFor="name">FullName</label>
              <div className="w-full">
                <input
                  {...register("name", { required: false })}
                  className="w-full"
                  type="text"
                  placeholder="type here"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <div className="w-full">
                <input
                  {...register("email", { required: false })}
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
                  {...register("password", { required: false })}
                  className="w-full lowercase"
                  type="text"
                  placeholder="type here"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-2">
              <label htmlFor="image">Upload Your Image</label>
              <div className="w-full">
                <input
                  {...register("image", { required: false })}
                  className="w-full bg-primary text-base-100 rounded-lg"
                  type="file"
                  name="image"
                  id="image"
                />
              </div>
            </div>
            <div>
              <label htmlFor="image">{seller ? "seller" : "buyer"}</label>
              <div>
                <input
                  onChange={() => setSeller(!seller)}
                  type="checkbox"
                  accept="seller"
                  className="toggle toggle-sm"
                />
              </div>
            </div>
            <div>
              <button
                disabled={loader ? true : false}
                onClick={handleSubmit(handleSign)}
                className="btn-prime mt-10 w-full"
              >
                {loader ? <SmallLoader /> : "Sign Up"}
              </button>
            </div>
            <p className="text-base ">
              New Here?{" "}
              <span>
                <Link
                  className="font-semibold font-link text-primary"
                  to="/login"
                >
                  Login
                </Link>
              </span>{" "}
              From Here!!!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
