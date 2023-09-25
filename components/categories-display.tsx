import React from "react";

const CategoriesDisplay = async () => {
  // const categories = await getCategories();
  //
  // console.log(categories);

  return (
    <div className="w-full flex items-center justify-end  text-[1.2rem] gap-4">
      <span>Cars</span>
      <span>Skooters</span>
    </div>
  );
};

export default CategoriesDisplay;
