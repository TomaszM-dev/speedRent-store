import { Location } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/locations`;

const getLocations = async (): Promise<Location[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getLocations;
