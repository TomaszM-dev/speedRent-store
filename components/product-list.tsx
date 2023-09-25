import { Product } from "@/types";
import React from "react";
import ProductCard from "./product-card";
import NoResults from "./ui/no-results";

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">Related Products: </h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} car={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
