"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterOption = ({
  mainText,
  optionHeading,
  options,
}: {
  mainText: string;
  optionHeading?: string;
  options: any[];
}) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="dropdown dropdown-hover">
      <div
        onClick={() => setisOpen(!isOpen)}
        tabIndex={0}
        role="button"
        className="btn mr-4"
      >
        <p className="mr-2">{mainText}</p>
        {!isOpen ? <FaChevronDown /> : <FaChevronUp />}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {optionHeading && (
          <li className="py-2 text-center font-semibold border-b">
            {optionHeading}
          </li>
        )}
        {options.map((item) => (
          <li>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterOption;
