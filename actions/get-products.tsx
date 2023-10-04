import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  typeId?: string;
  brandId?: string;
  rateId?: string;
  powerId?: string;
  locationId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      typeId: query.typeId,
      brandId: query.brandId,
      powerId: query.powerId,
      rateId: query.rateId,
      locationId: query.locationId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
