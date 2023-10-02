import React from "react";

// components
import ProductCard from "./product-card";
import NoResults from "./ui/no-results";

// types
import { Product } from "@/types";
interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4 ">
      <h3 className="font-bold text-3xl">Related Products: </h3>
      {/* @ts-ignore */}
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2">
        {items.map((item) => (
          <ProductCard key={item.id} car={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
