"use client";
import React from "react";
import BrandsImages from "./brands";

const Products = () => {
  return (
    <section
      className="section h-screen flex items-center w-full "
      id="products"
    >
      <div className="container  bg-slate-300   mx-auto ">
        <BrandsImages />
      </div>
    </section>
  );
};

export default Products;
