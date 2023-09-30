import getCategories from "@/actions/get-categories";
import Search from "@/components/modals/search-modal";
import CategoryNav from "@/components/navbars/category-nav";

import Footer from "@/components/ui/footer";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <>
      <CategoryNav categories={categories} />

      {children}
      <Footer />
    </>
  );
}
