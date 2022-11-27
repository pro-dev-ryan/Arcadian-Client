import React from "react";
import { useQuery } from "react-query";

const Category = () => {
  const { cards, isLoading } = useQuery({
    queryKey: ["cards"],
    queryFn: (async = () =>
      axios.get(`http://localhost:5000/shop/${data}`)).catch((err) =>
      console.log(err)
    ),
  });
  console.log(cards);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {category.map((product, i) => (
        <Card key={i} product={product} />
      ))}
    </div>
  );
};

export default Category;
