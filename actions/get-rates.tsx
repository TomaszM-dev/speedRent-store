import { Rate } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/rates`;

const getRates = async (): Promise<Rate[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getRates;
