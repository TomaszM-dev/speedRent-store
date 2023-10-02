import getCategories from "@/actions/get-categories";

import CategoryNav from "@/components/navbars/category-nav";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // fetching categories from data base
  const categories = await getCategories();

  return (
    <>
      <CategoryNav categories={categories} />
      {children}
    </>
  );
}
