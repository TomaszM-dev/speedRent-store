import getCategories from "@/actions/get-categories";
import PagesHeader from "@/components/pages-header";
import Footer from "@/components/ui/footer";
import { redirect } from "next/navigation";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <>
      <PagesHeader categories={categories} />
      {children}
    </>
  );
}
