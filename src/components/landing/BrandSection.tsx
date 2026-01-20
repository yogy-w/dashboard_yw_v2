"use client";

import React from "react";

export default function BrandSection() {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            
            {/* Ornamen Atas (Opsional: Memberikan kesan Islami) */}
            <div className="text-success opacity-25 mb-2">
              <i className="ri-double-quotes-l fs-1"></i>
            </div>

            {/* Nama Masjid Utama */}
            <h1 className="display-2 fw-black text-dark mb-0 tracking-tighter">
              MASJID ABU UBAIDAH
            </h1>
            
            {/* Nama Baris Kedua dengan Warna Hijau Gelap */}
            <h1 className="display-3 fw-bold mb-3" style={{ color: '#064e3b', marginTop: '-15px' }}>
              BIN AL JARRAH
            </h1>

            {/* Garis Dekorasi yang Modern */}
            {/* <div className="d-flex align-items-center justify-content-center gap-3 my-4">
              <div className="flex-grow-1 bg-light" style={{ height: '1px', maxWidth: '100px' }}></div>
              <div className="bg-success rounded-circle" style={{ width: '10px', height: '10px' }}></div>
              <div className="flex-grow-1 bg-light" style={{ height: '1px', maxWidth: '100px' }}></div>
            </div> */}

            {/* Sub-keterangan */}
            <p className="text-muted fs-5 text-uppercase fw-medium ls-xl">
              Pusat Ibadah & Dakwah • Villa Makmur 2 Bekasi
            </p>
            </div>
        </div>
      </div>
      <style jsx>{`
        .fw-black { font-weight: 900; }
        .tracking-tighter { letter-spacing: -3px; }
        .ls-xl { letter-spacing: 5px; }
        
        @media (max-width: 768px) {
          .display-2 { font-size: 3rem; }
          .display-3 { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
}