import React from "react";
import Card from "./Card";

const ProductSection = ({
  heading,
  products,
}: {
  heading: string;
  products: any[];
}) => {
  return (
    <div className="flex flex-col space-y-4 my-4 border overflow-x-auto">
      <h1 className="text-2xl font-semibold ">{heading || "Best Sellers"}</h1>
      <div className="flex space-x-4">
        {products &&
          Array.isArray(products) &&
          products.map((a) => <Card key={a} />)}
      </div>
    </div>
  );
};

export default ProductSection;
