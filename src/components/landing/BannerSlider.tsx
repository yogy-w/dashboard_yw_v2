"use client";

import Image from "next/image";
import Link from "next/link";
import { Banner } from "@/types/bannerTypes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BannerSlider({ banners }: { banners: Banner[] }) {
  if (!banners.length) return null;

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-[420px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[420px]">
              {banner.Media?.url && (
                <Image
                  src={banner.Media.url}
                  alt={banner.title}
                  fill
                  priority
                  className="object-cover"
                />
              )}

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="container text-white">
                  <h1 className="text-4xl font-bold">{banner.title}</h1>

                  {banner.caption && (
                    <p className="mt-2 text-lg max-w-xl">
                      {banner.caption}
                    </p>
                  )}

                  {banner.link_url && (
                    <Link
                      href={banner.link_url}
                      className="inline-block mt-5 px-6 py-3 bg-primary rounded text-white"
                    >
                      Selengkapnya
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
