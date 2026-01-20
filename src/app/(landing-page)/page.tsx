"use client";

import React, { useEffect,useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// services & types
import { fetchMainBanner } from "@/services/bannerService";
import { Banner } from "@/types/bannerTypes";

// components
import HeroSection from "@/components/landing/HeroSection";
import PrayerTimeSection from "@/components/landing/PrayerTimeSection";
import KajianSection from "@/components/landing/KajianSection";
import DonationSection from "src/components/landing/DonationSection";
import BrandSection from "src/components/landing/BrandSection";
  
export default function LandingPage() {
  //---STATE--
  const [banners, setBanners] = useState<Banner[]>([]);


//---EFFECT--
  useEffect(() => {
    const load = async () => {
      const data = await fetchMainBanner();
      setBanners(data);
    };
    load();
  }, []);

   return (
    <>
     {/* ================= HERO SECTION ================= */}
      {/* 1. SEKSI IDENTITAS (Paling Atas) */}
      <section className="pt-0 mt-0 pb-2 bg-white">
        <div className="container text-center mb-5">
          {/* Kita pakai display-4 agar tulisan besar dan gagah */}
          <BrandSection />            
          <PrayerTimeSection />
        </div>
      </section>
      {/* 3. BANNER / SLIDER (Sekarang berada di bawah jadwal) */}
      <section className="pb-5">
        <HeroSection banners={banners} />
      </section>
      <KajianSection />
      <DonationSection />
    </>
  );
}