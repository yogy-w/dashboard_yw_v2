"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { Banner } from "@/types/bannerTypes";

/* ============================== 
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
    <section className="section py-0 hero-section" id="hero">
      <HeroBackground />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-10">
            <div className="text-center">
              <HeroBanner banners={banners} />
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

function HeroBanner({ banners }: { banners: Banner[] }) {
  // 1. Filter: Hanya ambil banner yang punya data media dan URL
  const validBanners = banners.filter(b => b.media && b.media.url);

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={validBanners.length > 1} // Loop hanya jika gambar lebih dari satu
      className="carousel slide carousel-fade"
    >
      <div className="carousel-inner shadow-lg p-2 bg-white rounded">
        {validBanners.length > 0 ? (
          validBanners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Image
                src={banner.media?.url || "/images/demos/default.png"}
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
