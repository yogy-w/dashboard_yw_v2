"use client";

import React from "react";
import Link from "next/link";

/**
 * KOMPONEN INFAQ - THEME DARK PREMIUM
 */
export default function DonationSection() {
  const bankAccount = {
    bank: "Bank Syariah Indonesia (BSI)",
    number: "7123 4567 89",
    name: "MASJID ABU UBAIDAH BIN AL JARRAH"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bankAccount.number.replace(/\s/g, ''));
    alert("Nomor rekening berhasil disalin!");
  };

  return (
    <section className="py-5 bg-white" id="infaq">
      <div className="container">
        {/* CARD DENGAN BACKGROUND DARK (Gunakan warna #1a1d21 atau Hijau Sangat Gelap) */}
        <div className="card border-0 rounded-4 overflow-hidden shadow-lg" style={{ backgroundColor: '#064e3b' }}>
          <div className="card-body p-0">
            <div className="row g-0">
              
              {/* SISI KIRI: TEKS & REKENING */}
              <div className="col-lg-7 p-4 p-md-5 text-white">
                <div className="mb-4">
                  {/* Badge Warna Emas/Kuning agar kontras di BG Gelap */}
                  <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3 shadow">
                    Amalan Jariyah
                  </span>
                  <h2 className="display-6 fw-bold mb-3 text-white">Mari Berbagi Kebaikan</h2>
                  <p className="text-white-50 fs-5 mb-4">
                    Salurkan infaq terbaik Anda untuk operasional dan kemakmuran Masjid Abu Ubaidah. Setiap rupiah adalah investasi akhirat yang abadi.
                  </p>
                  
                  {/* TOMBOL LIHAT LAPORAN (Warna Terang agar menonjol) */}
                  <div className="mb-4">
                    <Link href="/laporan-keuangan" className="btn btn-outline-light fw-bold px-4 py-2 rounded-pill shadow-sm border-2">
                      <i className="ri-file-list-3-line me-2"></i>
                      Transparansi Keuangan
                    </Link>
                  </div>
                </div>

                {/* INFO REKENING (Dibuat lebih terang sedikit dari BG utama) */}
                <div className="bg-white bg-opacity-10 p-4 rounded-4 border border-white border-opacity-10">
                  <h6 className="text-uppercase small fw-bold mb-2 text-white-50">Rekening Resmi Masjid:</h6>
                  <h4 className="fw-bold mb-1 text-white">{bankAccount.bank}</h4>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="display-6 fw-bold text-warning ls-lg">{bankAccount.number}</span>
                    <button 
                      onClick={handleCopy}
                      className="btn btn-sm btn-light rounded-circle shadow-sm" 
                    >
                      <i className="ri-file-copy-line"></i>
                    </button>
                  </div>
                  <p className="mb-0 small fw-medium text-white-50 uppercase">a.n {bankAccount.name}</p>
                </div>
              </div>

              {/* SISI KANAN: QRIS (Diberi aksen gelap yang berbeda) */}
              <div className="col-lg-5 bg-black bg-opacity-25 d-flex flex-column align-items-center justify-content-center p-5 text-center text-white border-start border-white border-opacity-10">
                <div className="bg-white p-3 rounded-4 shadow-lg mb-3">
                  <div className="d-flex align-items-center justify-content-center bg-light rounded shadow-inner" style={{ width: '180px', height: '180px' }}>
                    <i className="ri-qr-code-line text-dark display-1"></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-1 text-white">Infaq via QRIS</h5>
                <p className="small text-white-50 mb-0 text-uppercase ls-md">Scan via Mobile Banking / E-Wallet</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ls-lg { letter-spacing: 2px; }
        .ls-md { letter-spacing: 1px; }
      `}</style>
    </section>
  );
}