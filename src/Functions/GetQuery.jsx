<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";
export const Query = (path, email) => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["email"],
    queryFn: async () =>
      axios
        .get(`https://arcadian-server.vercel.app/${path}?email=${email}`)
=======
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";
export const Query = (path, string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user", "string"],
    queryFn: async () =>
      axios
        .get(`http://localhost:5000/${path}?string=${string}`)
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
        .catch((err) => console.error(err)),
  });
  if (isLoading) {
    <>
      <Loader />
    </>;
  }
<<<<<<< HEAD
  if (data) {
    return data;
  }
=======
  return data;
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
};
