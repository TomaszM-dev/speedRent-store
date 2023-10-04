// components UI
import About from "@/components/home-page-ui/about";
import BackToTopBtn from "@/components/home-page-ui/back-to-top-btn";
import Contact from "@/components/home-page-ui/contact";
import Footer from "@/components/ui/footer";
import Hero from "@/components/home-page-ui/hero";
import Navbar from "@/components/navbars/navbar";
import Products from "@/components/home-page-ui/products";
import Testimonials from "@/components/home-page-ui/testimonials";
import Why from "@/components/home-page-ui/why";

// fetching data
import getProducts from "@/actions/get-products";
import getLocations from "@/actions/get-location";
import getBrands from "@/actions/get-brand";
import getTypes from "@/actions/get-types";

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const locations = await getLocations();
  const brands = await getBrands();
  const types = await getTypes();
  console.log(products);

  return (
    <div className=" bg-white mx-auto relative overflow-hidden ">
      {/*  @ts-ignore */}
      <Navbar />
      <Hero brands={brands} locations={locations} types={types} />
      <Products
        products={products}
        types={types}
        brands={brands}
        locations={locations}
      />
      <About />
      <Why />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
}
