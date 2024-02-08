import ProductsListingComponent from "@/components/listing";
import Filters from "@/components/listing/Filters";
import Paginator from "@/components/listing/Paginator";
import React from "react";

const ProductsListing = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">Tshirts @199</h1>
      <Filters />
      <div className="divider my-6" />
      <ProductsListingComponent products={[1, 2, 3, 4, 5, 6]} />
      <div className="divider my-6" />
      <Paginator />
    </div>
  );
};

export default ProductsListing;
