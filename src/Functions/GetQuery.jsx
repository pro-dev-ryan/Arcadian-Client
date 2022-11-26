import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";
export const Query = (path, string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user", "string"],
    queryFn: async () =>
      axios
        .get(`http://localhost:5000/${path}?string=${string}`)
        .catch((err) => console.error(err)),
  });
  if (isLoading) {
    <>
      <Loader />
    </>;
  }
  return data;
};
