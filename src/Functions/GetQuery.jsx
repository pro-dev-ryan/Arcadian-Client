import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";
export const Query = (path, email) => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["email"],
    queryFn: async () =>
      axios
        .get(`https://arcadian-server.vercel.app/${path}?email=${email}`)
        .catch((err) => console.error(err)),
  });
  if (isLoading) {
    <>
      <Loader />
    </>;
  }
  if (data) {
    return data;
  }
};
