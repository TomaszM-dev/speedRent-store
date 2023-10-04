import { Product } from "@/types";
import qs from "query-string";

const URL = `https://speed-rent-admin-panel.vercel.app/api/e5345677-845e-433a-a692-0f6f5b9178fe/products`;

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
