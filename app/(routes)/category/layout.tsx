// components
import Search from "@/components/modals/search-modal";
import CategoryNav from "@/components/navbars/category-nav";
import Footer from "@/components/ui/footer";

// fetch
import getCategories from "@/actions/get-categories";

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
