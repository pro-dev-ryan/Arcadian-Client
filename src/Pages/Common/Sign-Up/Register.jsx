import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { imageUploader } from "../../../Functions/imageUploader";
import { useContext } from "react";
import { ContextAuthentication } from "../../../Contexts/Context/AuthContext";

const Register = () => {
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();
  const { signUpEP, updateInfo, user } = useContext(ContextAuthentication);
  console.log(user);
  const handleSign = (data) => {
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
      };
      signUpEP(email, password)
        .then((res) => {
          console.log(res);
          toast.success("user creation successful");
          updateInfo(name, url)
            .then(() => {
              console.log("working");
            })
            .catch((err) => console.log(err));
          navigate("/");
          reset();
        })
        .catch((err) => {
          toast.error("Something Went wrong");
          console.log(err);
        });
    });
  };
  console.log(user.photoURL);
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
                  className="w-full"
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
                  className="w-full"
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
              <button
                onClick={handleSubmit(handleSign)}
                className="btn-prime mt-10 w-full"
              >
                Sign Up
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
