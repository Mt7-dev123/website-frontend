"use client";

import React, { useRef, useState } from "react";

import AboutUs from "@/components/AboutUs";
import ClientsSection from "@/components/ClientsSection";
import Comparison from "@/components/Comparison";
import ComparisonSection from "@/components/ComparisonSection";
import ComparisonTable from "@/components/ComparisonTable";
import CompSection from "@/components/CompSection";
import FlowSection from "@/components/FlowSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ScrollToTop from "@/components/ScrollToTop";
import ProblemSection from "@/components/ProblemSection";
import Guarantee from "@/components/Guarantee";
import GetQuotesButton from "@/components/GetQuotesButton";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import FAQSection from "@/components/FAQSection";

const Page = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      {/* stats bar */}
      <ProblemSection />
      {/* Solution section */}
      <FlowSection />
      <Pricing />
      {/* Testimonials     */}
      <Guarantee />
      <ClientsSection />
      <WhoThisIsFor />
      <FAQSection />
      <AboutUs />
      <LogoSection />
      <Footer />
      <ScrollToTop />
      <GetQuotesButton />

      
      {/* <ComparisonSection /> */}
      {/* <Comparison /> */}
      {/* <ComparisonTable /> */}
      {/* <CompSection /> */}
    </>
  );
};

export default Page;
