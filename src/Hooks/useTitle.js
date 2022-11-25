import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Arcadian`;
  }, [title]);
};

export default useTitle;
