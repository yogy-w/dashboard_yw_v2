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

  function HeroTitle() {
    return (
      <h1 className="display-6 fw-semibold mb-3 lh-base">
        MASJID ABU UBAIDAH BIN AL JARRAH{" "}
        <span className="text-success"></span>
      </h1>
    );
  }

  return (
    <>
     {/* ================= HERO SECTION ================= */}
      {/* 1. SEKSI IDENTITAS (Paling Atas) */}
      <section className="pt-5 mt-3 pb-3 bg-white">
        <div className="container text-center mb-5">
          {/* Kita pakai display-4 agar tulisan besar dan gagah */}
          <div className="mb-4 pt-2">
            <h1 className="display-6 fw-bold text-dark mb-2 text-uppercase" style={{ letterSpacing: '-1px', fontFamily: 'Public Sans, sans-serif' }}>
              Masjid Abu Ubaidah <br className="d-md-none" /> 
              <span className="text-success">Bin Al Jarrah</span>
            </h1>
            
            {/* Garis bawah aksen yang lebih tebal dan lebar */}
            <div className="bg-success mx-auto" style={{ width: '80px', height: '6px', borderRadius: '10px' }}></div>
            
            <p className="text-muted mt-3 fs-5">Wilayah Jakarta dan sekitarnya</p>
          </div>

          <PrayerTimeSection />
        </div>
      </section>

      {/* 3. BANNER / SLIDER (Sekarang berada di bawah jadwal) */}
      <section className="pb-5">
        <HeroSection banners={banners} />
      </section>
      <KajianSection />
      {/* Seksi lainnya... */}
      {/*
        <TrustedClients />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      */}
    </>
  );
}