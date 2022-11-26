import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";
export const Poster = (paths, body) => {
  const url = `http://localhost:5000/${paths}`;
  const { data, isLoading } = useQuery({
    queryKey: ["user", "product"],
    queryFn: async () =>
      await axios.post(url, { body }).catch((err) => console.log(err)),
  });
  console.log(paths, data, url);
  if (isLoading) {
    <>
      <Loader />
    </>;
  }
  return data;
};
