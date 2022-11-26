import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useState } from "react";
import SmallLoader from "../../../components/smallLoader/SmallLoader";
import { ContextAuthentication } from "../../../Contexts/Context/AuthContext";
import useTitle from "../../../Hooks/useTitle";
import { imageUploader } from "../../../Functions/imageUploader";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [prop, setProp] = useState(true);
  const [loader, setLoader] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  useTitle("Add Product");
  const { user } = useContext(ContextAuthentication);
  const url = `http://localhost:5000/addproduct`;
  const handleSign = (data) => {
    setLoader(true);
    const name = data.name;
    const brand = data.brand;
    const image = data.image[0];
    const condition = data.condition;
    const contact = data.contact;
    const description = data.description;
    const location = data.location;
    const op = data.op;
    const release = data.release;
    const prop = data.prop;
    const type = data.type;
    const controller = data.controller;
    const adapter = data.adapter;
    const rp = data.rp;
    const using = data.using;
    const advertise = false;
    const booked = false;
    const sold = false;
    const time = new Date();
    const sellerName = user?.displayName;
    const sellermail = user?.email;

    imageUploader(image)
      .then((data) => {
        const img = data.data.display_url;
        const pD = {
          img,
          name,
          brand,
          condition,
          contact,
          description,
          location,
          op,
          release,
          prop,
          type,
          controller,
          adapter,
          rp,
          using,
          advertise,
          booked,
          sold,
          time,
          sellermail,
          sellerName,
        };

        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("userTicket"),
          },
          body: JSON.stringify(pD),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status) {
              toast.success("Product Added Successfully");
              setLoader(false);
              reset();
            } else {
              toast.error(`${data.message}`);
              setLoader(false);
            }
          })
          .catch((err) => {
            setLoader(false);
            toast.error(`${err?.message || err?.statusText}`);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
        toast("Goods can't be added");
      });
  };

  return (
    <div>
      <h4>Add Goods here</h4>
      <div className="mb-5">
        <form
          onSubmit={handleSubmit(handleSign)}
          className="lg:m-3 lg:p-5 md:m-3 mx-px md:p-2 p-1 "
        >
          {/* main form */}
          <div className="form grid md:grid-cols-2 grid-cols-1 gap-5">
            {/* left-side */}
            <div className="form-left">
              <div className="flex flex-col w-full">
                <label htmlFor="name">Name</label>
                <div className="w-full">
                  <input
                    {...register("name", { required: true })}
                    className="w-full"
                    type="text"
                    placeholder="type here"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="brand">Brand</label>
                <div className="w-full">
                  <input
                    {...register("brand", { required: true })}
                    className="w-full"
                    type="text"
                    placeholder="type here"
                  />
                </div>
              </div>
              {/* Selection Type */}
              <div className="grid lg:grid-cols-3">
                <div className="flex flex-col w-full">
                  <label htmlFor="condition">Condition</label>
                  <div className="lg:w-1/2">
                    <select
                      {...register("conditon")}
                      className="select select-primary"
                      id="condition"
                    >
                      <option value="Exellent">Best</option>
                      <option value="Ok">Better</option>
                      <option value="It Runs">Good</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="using">Using-Duration</label>
                  <div className="lg:w-1/2">
                    <select
                      {...register("using", { required: true })}
                      className="select select-primary"
                      id="using"
                    >
                      <option value="< or 1 yr">Short Time</option>
                      <option value="1-3 yr">1 - 3 year</option>
                      <option value=" 3 yr or >">Long Time</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="type">Console Type</label>
                  <div className="lg:w-1/2">
                    <select
                      {...register("type")}
                      className="select select-primary"
                      id="type"
                    >
                      <option value="Tv-Console">Console</option>
                      <option value="Handheld(HD)">Handheld(HD)</option>
                      <option value="Handheld(Mono)">Handheld(Mono)</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Selection Type */}

              <div className="flex flex-col w-full">
                <label htmlFor="location">Location</label>
                <div className="w-full">
                  <input
                    {...register("location", { required: true })}
                    className="w-full"
                    type="text"
                    placeholder="type here"
                  />
                </div>
              </div>
              {/* Contact info  */}
              <div className="flex flex-col w-full">
                <label htmlFor="contact">Contact</label>
                <div className="w-full">
                  <input
                    {...register("contact", { required: true })}
                    className="w-full"
                    type="tel"
                    placeholder="type here"
                  />
                </div>
              </div>
              {/* Release */}
              <div className="flex flex-col w-full">
                <label htmlFor="release">Releasing-Year</label>
                <div className="w-full">
                  <input
                    {...register("release")}
                    className="w-full"
                    type="date"
                    placeholder="type here"
                  />
                </div>
              </div>
              {/* Original and resale Price */}
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="OP">New Price</label>
                  <div className="w-full">
                    <input
                      {...register("op", { required: true })}
                      className="w-full"
                      type="number"
                      placeholder="type here"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="rp">Resale Price</label>
                  <div className="w-full">
                    <input
                      {...register("rp", { required: true })}
                      className="w-full"
                      type="number"
                      placeholder="type here"
                    />
                  </div>
                </div>
              </div>
              {/* Original and resale Price */}
            </div>
            {/* Right-side */}
            <div className="form-right">
              {/* selection component */}
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col w-full">
                  <label htmlFor="controller">Controller</label>
                  <div className="lg:w-1/2">
                    <select
                      {...register("controller", { required: true })}
                      className="select select-primary"
                      id="controller"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="Adapter">Adapter</label>
                  <div className="lg:w-1/2">
                    <select
                      {...register("adapter", true)}
                      className="select select-primary"
                      id="adapter"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                </div>
                {/* selection component */}
              </div>
              {/* image Upload */}
              <div className="flex flex-col w-full text-sm mt-2">
                <label htmlFor="image">Upload Your Image</label>
                <div className="w-full">
                  <input
                    {...register("image", { required: true })}
                    className="w-full bg-primary text-base-100 text-base lg:text-lg rounded-lg"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
              </div>
              {/* Custom component */}
              <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                <div>
                  <label htmlFor="Custom Props">Custom Props</label>
                  <div>
                    <input
                      onChange={() => setProp(!prop)}
                      type="checkbox"
                      className="toggle toggle-primary toggle-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="Props">Add prop</label>
                  <div className="w-full">
                    <input
                      {...register("prop")}
                      className="w-full"
                      type="text"
                      placeholder="type here"
                      disabled={prop ? true : false}
                    />
                  </div>
                </div>
              </div>
              {/* Custom Property */}
              {/* Description  */}
              <div className="flex flex-col w-full">
                <label htmlFor="detail">Add Detail</label>
                <div className="w-full">
                  <textarea
                    {...register("description", { required: true })}
                    className="w-full textarea textarea-primary"
                    id="detail"
                    placeholder="Product-Details"
                    rows="9"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Right-side */}
          </div>

          <div className="text-center">
            <button
              disabled={loader ? true : false}
              onClick={handleSubmit(handleSign)}
              className="btn-prime disabled:bg-black lg:mt-10 mt-3 lg:w-1/3 md:w-1/3 w-1/2"
            >
              {loader ? <SmallLoader /> : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
