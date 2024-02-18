import Image from "next/image";
import React from "react";

const StoreCard = () => {
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl border">
      <figure>
        <Image
          src={
            "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt="Stores"
          //   className="h-[80%]"
        />
        {/* <img src="" alt="Shoes" /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
      </div>
    </div>
  );
};

export default StoreCard;
