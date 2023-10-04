import { Product } from "@/types";

const URL = `https://speed-rent-admin-panel.vercel.app/api/e5345677-845e-433a-a692-0f6f5b9178fe/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;
