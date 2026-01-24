"use client";

import React, { useRef, useState } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import LeadModal from "@/components/LeadModal";

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
import Services from "@/components/Services";

const Page = () => {
  const servicesRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  useScrollTrigger(servicesRef, () => setModalOpen(true));

  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <ClientsSection />
      <FlowSection />
      <AboutUs />

      {/* MODAL TRIGGER SECTION */}
      <Services ref={servicesRef} />

      <Pricing />
      <Footer />
      <ScrollToTop />

      {/* LEAD MODAL */}
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* <ComparisonSection /> */}
      {/* <Comparison /> */}
      {/* <ComparisonTable /> */}
      {/* <CompSection /> */}
    </>
  );
};

export default Page;

