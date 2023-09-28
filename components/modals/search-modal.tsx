import getLocations from "@/actions/get-location";
import { SearchContext } from "@/context/search";
import { useFetch } from "@/hooks/use-fetch";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import BrandSelection from "../selections/brand-selection";
import LocationSelection from "../selections/location-selection";
import TypeSelection from "../selections/type-selection";
import Button from "../ui/button";

export default function Search() {
  // @ts-ignore

  const { searchActive } = useContext(SearchContext);
  const [location, setLocation] = useState("Select Location");
  const [type, setType] = useState("Select Type");
  const [brand, setBrand] = useState("Select Brand");
  const [disable, setDisable] = useState(false);
  const data = useFetch();
  const router = useRouter();

  useEffect(() => {
    if (
      location === "Select Location" ||
      type === "Select Type" ||
      brand === "Select Brand"
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [location, type, brand]);

  const handleClick = () => {
    const curBrand = data.brands.filter((item) => item.name === brand);
    const curLocation = data.locations.filter((item) => item.name === location);
    const curType = data.types.filter((item) => item.name === type);

    router.push(
      `/category/31ecbd08-a89a-49d9-ad84-e9ce846c16c5?typeId=${curType[0].id}&brandId=${curBrand[0].id}&locationId=${curLocation[0].id}`
    );
  };

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[100px] flex items-center w-[100%] px-10 mt-2"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px] w-[80%]"
      } hidden xl:flex  mx-auto relative shadow-lg `}
    >
      <div className="xl:h-full flex  items-center  w-full  mx-10  xl:px-0">
        <LocationSelection location={location} setLocation={setLocation} />
        <TypeSelection type={type} setType={setType} />
        <BrandSelection brand={brand} setBrand={setBrand} />
      </div>
      <Button
        disabled={disable}
        onClick={handleClick}
        className="bg-accent px-10  py-2 h-14 self-center   "
      >
        Search{" "}
      </Button>
    </div>
  );
}
