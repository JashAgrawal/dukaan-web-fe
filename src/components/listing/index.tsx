import React from "react";
import Card from "../Card";

const ProductsListingComponent = ({ products }: { products: any[] }) => {
  if (products && Array.isArray(products) && products.length !== 0) {
    return (
      <div className="grid grid-cols-3 gap-4 gap-y-4">
        {products.map((product) => (
          <Card />
        ))}
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center min-h-96 w-full">
      <h1 className="font-semibold text-2xl">No matching results found ...</h1>
    </div>
  );
};

export default ProductsListingComponent;
