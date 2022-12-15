import React from "react";
import useTitle from "../../../Hooks/useTitle";
import AdvertiseProduct from "./sections/AdvertiseProduct";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import Hero from "./sections/Hero";

const Home = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      try {
        const res = await fetch("https://arcadian-server.vercel.app/advertise");
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });
  {
    isLoading && <Loader />;
  }
  useTitle("Home");
  return (
    <div className="overflow-hidden">
      <Hero />
      {data?.status && <AdvertiseProduct data={data} />}
    </div>
  );
};

export default Home;
