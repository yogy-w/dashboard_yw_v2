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
      {/* NAVBAR */}
      <nav
        className={`navbar navbar-expand-lg navbar-landing fixed-top ${
          isNavbarShrunk ? "is-sticky" : ""
        }`}
        id="navbar"
      >
        <div className="container">
          <Link href="/">
            <Image
              src="/images/logo-dark.png"
              alt="Velzon dark logo"
              height={17}
              width={85}
            />
          </Link>

          <button
            className="navbar-toggler py-0 fs-20 text-body"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
              <li className="nav-item">
                <Link href="#hero" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#services" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#features" className="nav-link">
                  Kegiatan
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#plans" className="nav-link">
                  Laporan Keuangan
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <div>
              <Link
                href="/authinner/signin/basic"
                className="btn btn-link fw-medium text-decoration-none text-body"
              >
                Sign in
              </Link>
              <Link href="/authinner/signup/basic" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="vertical-overlay"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent.show"
      ></div>

      {/* ISI HALAMAN */}
      <div style={{ paddingTop: "10px" }}>
        {children}
      </div>

      {/* FOOTER DIPINDAH KE SINI */}
      <footer className="custom-footer bg-dark py-5 position-relative">
        <div className="container">
          <div className="row">
            {/* ... copy bagian footer kamu di sini persis seperti sebelumnya ... */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;
