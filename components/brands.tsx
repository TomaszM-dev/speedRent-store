import React from "react";

import Image from "next/image";
import audi from "public/icons/brands/audi.svg";
import bmw from "public/icons/brands/bmw.svg";
import ford from "public/icons/brands/ford.svg";
import mazda from "public/icons/brands/mazda.svg";
import mercedes from "public/icons/brands/mercedes.svg";
import skoda from "public/icons/brands/skoda.svg";
import vw from "public/icons/brands/vw.svg";

const BrandsImages = () => {
  return (
    <div className="justify-center gap-x-20 gap-y-8 flex items-center   flex-wrap ">
      <Image
        className="h-18 w-20 "
        width={200}
        height={200}
        alt=""
        src={audi}
      />
      <Image className="h-14 w-20 " width={200} height={200} alt="" src={bmw} />
      <Image
        className="h-14 w-20 "
        width={200}
        height={200}
        alt=""
        src={ford}
      />
      <Image
        className="h-14 w-20 "
        width={200}
        height={200}
        alt=""
        src={mazda}
      />
      <Image
        className="h-14 w-20 "
        width={200}
        height={200}
        alt=""
        src={mercedes}
      />
      <Image
        className="h-14 w-20 "
        width={200}
        height={200}
        alt=""
        src={skoda}
      />
      <Image className="h-14 w-20 " width={200} height={200} alt="" src={vw} />
    </div>
  );
};

export default BrandsImages;
