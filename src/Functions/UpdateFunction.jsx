<<<<<<< HEAD
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
=======
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";
export const updater = (paths, id, body) => {
  const { data, loader } = useQuery({
    queryKey: ["user", "product"],
    queryFn: axios.put(`http://localhost:5000/${paths}/${id}`, {
      body,
    }),
  });
  if (loader) {
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
    return (
      <>
        <Loader />
      </>
    );
  }
<<<<<<< HEAD
  return [data, refetch];
=======
  return data;
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
};
