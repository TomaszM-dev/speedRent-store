import getBrands from "@/actions/get-brand";
import getCategories from "@/actions/get-categories";
import getCategory from "@/actions/get-category";
import getLocations from "@/actions/get-location";
import getProducts from "@/actions/get-products";
import getRates from "@/actions/get-rates";
import getTypes from "@/actions/get-types";
import ProductCard from "@/components/product-card";
import ProductList from "@/components/product-list";
import NoResults from "@/components/ui/no-results";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { getDefaultFormatCodeSettings } from "typescript";
import Filter from "./components/filter";
import ResetFilter from "./components/reset-filter";

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
        <div className=" flex-[25%] border-[1px] bg-white px-6 py-6 flex flex-col ">
          <ResetFilter categoryId={params.categoryId} />
          <div className="flex flex-col mt-8 gap-4">
            <Filter valueKey="typeId" name="Types" data={types} />
            <Filter valueKey="brandId" name="Brands" data={brands} />
            <Filter valueKey="locationId" name="Locations" data={locations} />
          </div>
        </div>
        <div className="flex-[75%] grid grid-cols-2 xxl:grid-cols-3 max-md:grid-cols-1 gap-4 h-fit w-full  ">
          {products.length === 0 && <NoResults />}
          {products.map((item) => (
            <ProductCard key={item.id} car={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
