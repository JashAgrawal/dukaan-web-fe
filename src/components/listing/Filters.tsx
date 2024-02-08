import React from "react";
import FilterOption from "./FilterOption";

const Filters = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-semibold">
        Filters
        <p className="text-sm font-normal text-gray-400">
          (showing 10 - 199 results)
        </p>
      </h1>
      <div className="flex items-center">
        <FilterOption
          mainText="Size"
          optionHeading="Sizes Available"
          options={["M", "L", "XL"]}
        />
        <FilterOption mainText="Size" options={["M", "L", "XL"]} />
        <FilterOption mainText="Size" options={["M", "L", "XL"]} />
        <FilterOption mainText="Size" options={["M", "L", "XL"]} />
      </div>
      <FilterOption mainText="Size" options={["M", "L", "XL"]} />
    </div>
  );
};

export default Filters;
