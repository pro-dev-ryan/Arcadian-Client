import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";
const headers = { authorization: `${localStorage.getItem("userTicket")}` };
export const useUpdater = (paths, body) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: axios.put(`https://arcadian-server.vercel.app/${paths}`, {
      headers,
      body,
    }),
  });
  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return [data, refetch];
};
