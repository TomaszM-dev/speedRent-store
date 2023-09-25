import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";

import React from "react";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  console.log(product);

  return (
    <div className="section container ">
      <div className="px-4 py-10 ">
        <div className="grid-cols-2 grid  gap-x-8">
          <Gallery images={product.images} />
          <div className=" px-4">
            <Info data={product} />
          </div>
        </div>
        <hr className="my-10"></hr>
        <ProductList items={suggestedProducts} />
      </div>
    </div>
  );
};
export default ProductPage;
