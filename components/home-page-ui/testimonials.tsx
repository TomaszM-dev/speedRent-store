"use client";
import React from "react";
import TestimonialSlider from "../sliders/testimonial-slider";

const Testimonials = () => {
  return (
    <section className="section flex items-center " id="testimonials">
      <div className="container mx-auto max-sm:mt-[35rem]">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
