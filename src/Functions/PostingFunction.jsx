<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const PostingFunction = (paths, body) => {
  const url = `https://arcadian-server.vercel.app/${paths}`;
=======
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const PostingFunction = ({ paths, body }) => {
  const url = `http://localhost:5000/${paths}`;
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
  const { data, isLoading } = useQuery({
    queryKey: ["user", "product"],
    queryFn: async () =>
      await axios.post(url, { body }).catch((err) => console.log(err)),
  });
<<<<<<< HEAD
=======
  console.log(paths, data, url);
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
  if (isLoading) {
    <>
      <Loader />
    </>;
  }
  return data;
};

export default PostingFunction;
