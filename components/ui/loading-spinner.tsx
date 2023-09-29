import React from "react";
import spinner from "public/loadingSpinner.svg";
import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div className="absolute w-full  flex-col gap-3  bg-main h-fit top-40 left-0 flex items-center justify-center ">
      <Image src={spinner} alt="spinner" width={50} height={100}></Image>
      <p>Please add products to the cart</p>
    </div>
  );
};

export default LoadingSpinner;
