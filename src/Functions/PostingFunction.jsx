import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const PostingFunction = (paths, body) => {
  const url = `https://arcadian-server.vercel.app/${paths}`;
  const { data, isLoading } = useQuery({
    queryKey: ["user", "product"],
    queryFn: async () =>
      await axios.post(url, { body }).catch((err) => console.log(err)),
  });
  if (isLoading) {
    <>
      <Loader />
    </>;
  }
  return data;
};

export default PostingFunction;
