"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Brand, Type, Power, Location, Rate } from "@/types";
import Image from "next/image";

interface FilterProps {
  data: (Rate | Brand | Type | Power | Location)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-col ">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center ">
            {valueKey === "typeId" ? (
              // @ts-ignore
              <Image src={filter.imageUrl} width={40} height={40} alt="" />
            ) : null}
            <Button
              className={cn(
                "text-black",
                selectedValue === filter.id && "text-accent"
              )}
              onClick={() => onClick(filter.id)}
            >
              {/* @ts-ignore */}
              {filter.name ? filter.name : filter.value}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
