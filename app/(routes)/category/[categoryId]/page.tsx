import React, { useState } from "react";

// fetching
import getBrands from "@/actions/get-brand";
import getCategory from "@/actions/get-category";
import getLocations from "@/actions/get-location";
import getProducts from "@/actions/get-products";
import getRates from "@/actions/get-rates";
import getTypes from "@/actions/get-types";

// components
import SideBar from "./components/side-bar";
import RenderProducts from "./components/render-products";

export const revalidate = 0;

// types
interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    brandId: string;
    powerId: string;
    rateId: string;
    locationId: string;
    typeId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  // fetch products

  console.log(searchParams);
  const products = await getProducts({
    categoryId: params.categoryId,
    typeId: searchParams.typeId,
    brandId: searchParams.brandId,
    locationId: searchParams.locationId,
    rateId: searchParams.rateId,
    powerId: searchParams.powerId,
  });

  console.log(products);
  // get individual information
  const types = await getTypes();
  const brands = await getBrands();
  const locations = await getLocations();

  return (
    <div className=" w-full pb-10 bg-[#b2b7c2]/10 text-black">
      <div className="  flex w-full pt-40 min-xxl:container  mx-auto px-10 max-w-[1600px] gap-10 relative">
        {/* filter bar */}
        <SideBar
          categoryId={params.categoryId}
          types={types}
          brands={brands}
          locations={locations}
        />

        {/* list of products */}
        <RenderProducts
          categoryId={params.categoryId}
          products={products}
          types={types}
          brands={brands}
          locations={locations}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
