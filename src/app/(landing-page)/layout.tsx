"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isNavbarShrunk, setIsNavbarShrunk] = useState(false);

  useEffect(() => {
    const scrollNavigation = () => {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        setIsNavbarShrunk(true);
      } else {
        setIsNavbarShrunk(false);
      }
    };

    window.addEventListener("scroll", scrollNavigation);
    return () => window.removeEventListener("scroll", scrollNavigation);
  }, []);

  return (
    <div className="layout-wrapper landing">
      {/* NAVBAR: Menggunakan fixed-top agar selalu menempel di atas */}
      <nav
        className={`navbar navbar-expand-lg navbar-landing fixed-top ${
          isNavbarShrunk ? "is-sticky bg-white shadow-md py-2" : "py-3 bg-transparent"
        }`}
        id="navbar"
        style={{ transition: "all 0.3s ease" }}
      >
        <div className="container">
          {/* 1. LOGO */}
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/logomasjid4.png"
              alt="Logo Masjid"
              height={70}
              width={250}
              style={{ marginTop: "-10px" }}
              className="card-logo card-logo-dark"
            />
          </Link>

          {/* BUTTON MOBILE (HAMBURGER) */}
          <button
            className="navbar-toggler py-0 fs-20 text-body border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ri-menu-line"></i>
          </button>

          {/* 2. MENU NAVIGASI (Diletakkan di Tengah) */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link fw-semibold">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/profile" className="nav-link fw-semibold">Profile</Link>
              </li>
              <li className="nav-item">
                <Link href="/kegiatan" className="nav-link fw-semibold">Kegiatan</Link>
              </li>
              <li className="nav-item">
                <Link href="/laporan-keuangan" className="nav-link fw-semibold">Laporan Keuangan</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link fw-semibold">Contact</Link>
              </li>
            </ul>

          <style jsx>{`
          .custom-nav-link {
            font-size: 20px !important; /* Ukuran tulisan lebih besar sedikit */
            font-weight: 600;           /* Ketebalan tulisan */
            padding: 10px 15px;         /* Jarak antar menu agar tidak terlalu rapat */
            transition: color 0.3s ease;
            }
          .custom-nav-link:hover {
              color: #0ab39c !important; /* Warna hijau saat kursor di atas menu */
            }
        ` }</style>

            {/* 3. TOMBOL AUTH (Diletakkan di Kanan) */}
            <div className="d-flex align-items-center gap-2">
              <Link
                href="/login"
                className="btn btn-link fw-bold text-decoration-none text-dark p-0 me-2"
              >
                Sign in
              </Link>
              <Link href="/register" className="btn btn-primary rounded-pill px-4 shadow-sm">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* OVERLAY UNTUK MOBILE MENU */}
      <div
        className="vertical-overlay"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent.show"
      ></div>

      {/* ISI HALAMAN: 
          Diberi margin-top atau padding-top agar konten (seperti nama masjid) 
          tidak tertutup oleh navbar yang bersifat fixed-top.
      */}
      <main style={{ marginTop: "85px" }}>
        {children}
      </main>

      {/* FOOTER */}
      <footer className="custom-footer bg-dark py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
               <p className="text-white-50 mb-0">
                © {new Date().getFullYear()} Masjid Abu Ubaidah Bin Al Jarrah. Port API: 4000.
               </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;