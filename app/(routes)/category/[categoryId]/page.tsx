import getBrands from "@/actions/get-brand";
import getCategories from "@/actions/get-categories";
import getCategory from "@/actions/get-category";
import getLocations from "@/actions/get-location";
import getProducts from "@/actions/get-products";
import getRates from "@/actions/get-rates";
import getTypes from "@/actions/get-types";
import ProductCard from "@/components/product-card";
import NoResults from "@/components/ui/no-results";
import Image from "next/image";
import React from "react";
import Filter from "./components/filter";
import ResetFilter from "./components/reset-filter";

import { motion } from "framer-motion";
import SideBar from "./components/side-bar";
import RenderProducts from "./components/render-products";

export const revalidate = 0;

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
  const products = await getProducts({
    categoryId: params.categoryId,
    typeId: searchParams.typeId,
    brandId: searchParams.brandId,
    locationId: searchParams.locationId,
    rateId: searchParams.rateId,
    powerId: searchParams.powerId,
  });

  const types = await getTypes();
  const rates = await getRates();
  const brands = await getBrands();
  const locations = await getLocations();
  const category = await getCategory(params.categoryId);

  return (
    <div className="w-full pb-10 bg-[#b2b7c2]/10 text-black">
      <div className="  flex w-full pt-40 min-xxl:container  mx-auto px-10 max-w-[1600px] gap-10">
        <SideBar
          categoryId={params.categoryId}
          types={types}
          brands={brands}
          locations={locations}
        />
        <RenderProducts categoryId={params.categoryId} products={products} />
      </div>
    </div>
  );
};

export default CategoryPage;
