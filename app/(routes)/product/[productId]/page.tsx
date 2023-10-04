// components
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";

// fetching
import getCategories from "@/actions/get-categories";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";

import React from "react";

// types
type ProductPageProps = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  // get products that are included in that exact category
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  console.log(product);
  const category = await getCategories();

  return (
    <div className="pt-[7rem] container ">
      <div className="px-4 py-10  ">
        <div className="grid-cols-2  grid  gap-x-8 max-lg:flex max-lg:flex-col max-lg:items-start max-lg:w">
          <Gallery images={product.images} />
          <div className=" w-full px-4">
            <Info data={product} />
          </div>
        </div>
        <hr className="my-12"></hr>

        <ProductList items={suggestedProducts} />
      </div>
    </div>
  );
};
export default ProductPage;
