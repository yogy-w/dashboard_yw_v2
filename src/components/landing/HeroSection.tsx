"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { Banner } from "@/types/bannerTypes";

/* ================================
   TYPES
================================ */
interface HeroSectionProps {
  banners: Banner[];
}

/* ================================
   MAIN COMPONENT
================================ */
export default function HeroSection({ banners }: HeroSectionProps) {
  return (
    <section className="section pb-0 hero-section" id="hero">
      <HeroBackground />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-10">
            <div className="text-center mt-lg-5 pt-5">
              <HeroTitle />
              <HeroBanner banners={banners} />
              <HeroCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================
   SUB COMPONENTS
================================ */

function HeroBackground() {
  return <div className="bg-overlay bg-overlay-pattern"></div>;
}

function HeroTitle() {
  return (
    <h1 className="display-6 fw-semibold mb-3 lh-base">
      MASJID ABU UBAIDAH BIN AL JARRAH{" "}
      <span className="text-success">Velzon</span>
    </h1>
  );
}

function HeroBanner({ banners }: { banners: Banner[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop
      className="carousel slide carousel-fade"
    >
      <div className="carousel-inner shadow-lg p-2 bg-white rounded">
        {banners.length > 0 ? (
          banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Image
                src={banner.Media?.url || "/images/demos/default.png"}
                alt={banner.title}
                width={800}
                height={500}
                className="img-fluid"
                priority
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <Image
              src="/images/demos/default.png"
              alt="Default Banner"
              width={800}
              height={500}
              className="img-fluid"
              priority
            />
          </SwiperSlide>
        )}
      </div>
    </Swiper>
  );
}

function HeroCTA() {
  return (
    <div className="d-flex gap-2 justify-content-center mt-4">
      <Link href="/auth/signup" className="btn btn-primary">
        Get Started{" "}
        <i className="ri-arrow-right-line align-middle ms-1"></i>
      </Link>

      <Link href="/pricing" className="btn btn-danger">
        View Plans{" "}
        <i className="ri-eye-line align-middle ms-1"></i>
      </Link>
    </div>
  );
}
