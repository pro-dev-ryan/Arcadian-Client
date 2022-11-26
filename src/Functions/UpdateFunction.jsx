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
    return (
      <>
        <Loader />
      </>
    );
  }
  return data;
};
