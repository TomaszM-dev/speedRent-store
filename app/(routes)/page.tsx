import Header from "@/components/header";

import About from "@/components/ui/about";
import BackToTopBtn from "@/components/ui/back-to-top-btn";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Products from "@/components/ui/products";
import Testimonials from "@/components/ui/testimonials";
import Why from "@/components/ui/why";

export default function Home() {
  return (
    <div className="max-w-[1920px] bg-white mx-auto relative overflow-hidden ">
      {/*  @ts-ignore */}
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Why />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
}
