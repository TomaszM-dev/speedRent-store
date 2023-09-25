import About from "@/components/home-page-ui/about";
import BackToTopBtn from "@/components/home-page-ui/back-to-top-btn";
import Contact from "@/components/home-page-ui/contact";
import Footer from "@/components/ui/footer";
import Hero from "@/components/home-page-ui/hero";
import Navbar from "@/components/navbars/navbar";
import Products from "@/components/home-page-ui/products";
import Testimonials from "@/components/home-page-ui/testimonials";
import Why from "@/components/home-page-ui/why";

import getProducts from "@/actions/get-products";

export default async function Home() {
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="max-w-[1920px] bg-white mx-auto relative overflow-hidden ">
      {/*  @ts-ignore */}
      <Navbar />
      <Hero />
      <Products products={products} />
      <About />
      <Why />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
}
