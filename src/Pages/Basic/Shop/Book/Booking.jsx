import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import SmallLoader from "../../../../components/smallLoader/SmallLoader";
import { ContextAuthentication } from "../../../../Contexts/Context/AuthContext";
// import PostingFunction from "../../../../Functions/PostingFunction";
import { toast } from "react-hot-toast";

const Booking = () => {
  const [loader, setLoader] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const { user } = useContext(ContextAuthentication);
  const getProductInfo = useLoaderData();
  const { name: pdName, rp, _id } = getProductInfo;

  const handleBooking = (data) => {
    setLoader(true);
    const name = data.name;
    const email = data.buyerEmail;
    const pdName = data.pdName;
    const price = data.price;
    const contact = data.contact;
    const pdId = _id;

    const bookingInfo = {
      name,
      email,
      pdName,
      price,
      contact,
      pdId,
    };
    fetch("https://arcadian-server.vercel.app/booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `${localStorage.getItem("userTicket")}`,
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status) {
          toast.success(`${response?.message}`);
          setLoader(false);
          reset();
        } else {
          toast.error("Booking Failed, Try Again later");
        }
      })
      .catch((err) => console.log(err));
    // const result = PostingFunction("booking", bookingInfo);
    // console.log(result);
  };
  return (
    <div className="md:mx-8 mx-2">
      <h4 className="text-center mb-2">Book This Product</h4>
      <div className="md:my-5 my-2 flex flex-col items-center">
        <form
          className="lg:w-1/2 w-full"
          onSubmit={handleSubmit(handleBooking)}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="name">Buyer Name</label>
            <div className="w-full">
              <input
                {...register("name")}
                className="w-full lowercase"
                type="text"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Buyer email</label>
            <div className="w-full">
              <input
                {...register("buyerEmail")}
                className="w-full lowercase"
                type="email"
                value={user?.email}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="pdName">Product Name</label>
            <div className="w-full">
              <input
                {...register("pdName")}
                className="w-full lowercase"
                type="text"
                defaultValue={pdName}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="price">Price</label>
            <div className="w-full">
              <input
                {...register("price")}
                className="w-full lowercase"
                type="number"
                defaultValue={rp}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="contact">Contact</label>
            <div className="w-full">
              <input
                {...register("contact", { required: true })}
                className="w-full"
                type="number"
                placeholder="Your Contact Number"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="price">Meeting Location</label>
            <div className="w-full">
              <input
                {...register("meetingLocation")}
                className="w-full capitalize"
                type="text"
              />
            </div>
          </div>
          <div>
            <button
              disabled={loader ? true : false}
              type="submit"
              className="btn-prime mt-10 w-full"
            >
              {loader ? <SmallLoader /> : "Confirm Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
