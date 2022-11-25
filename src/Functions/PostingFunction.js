import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";
export const Poster = (paths, body) => {
  const { data, loader } = useQuery({
    queryKey: ["user", "product"],
    queryFn: axios.post(
      fetch(`http://localhost:5000/${paths}`, {
        body: body,
      })
    ),
  });
  if (loader) {
    return <Loader />;
  }
  return data;
};
