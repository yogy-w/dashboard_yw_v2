"use client";

import React from "react";
import Link from "next/link"; // Pastikan import ini ada

export default function DonationSection() {
  const bankAccount = {
    bank: "Bank Syariah Indonesia (BSI)",
    number: "7123 4567 89", // Sesuaikan dengan No. Rekening Masjid
    name: "MASJID ABU UBAIDAH BIN AL JARRAH"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bankAccount.number.replace(/\s/g, ''));
    alert("Nomor rekening berhasil disalin!");
  };

  return (
    <section className="py-5 bg-white" id="infaq">
      <div className="container">
        <div className="card border-0 bg-success rounded-4 overflow-hidden shadow-lg">
          <div className="card-body p-0">
            <div className="row g-0">
              
              {/* SISI KIRI: TEKS & REKENING */}
              <div className="col-lg-7 p-4 p-md-5 text-white">
                <div className="mb-4">
                  <span className="badge bg-white text-success px-3 py-2 rounded-pill fw-bold mb-3">Zakat, Infaq, Shadaqah</span>
                  <h2 className="display-6 fw-bold mb-3">Mari Berbagi Kebaikan</h2>
                  <p className="opacity-75 fs-5 mb-4">
                    Salurkan infaq terbaik Anda untuk operasional dan kemakmuran Masjid Abu Ubaidah. Setiap rupiah adalah tabungan akhirat.
                  </p>
                  
                  {/* TOMBOL LIHAT LAPORAN KEUANGAN */}
                  <div className="mb-4">
                    <Link href="/laporan-keuangan" className="btn btn-warning fw-bold px-4 py-2 rounded-pill shadow-sm">
                      <i className="ri-file-list-3-line me-2"></i>
                      Lihat Laporan Keuangan
                    </Link>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 p-4 rounded-4 border border-white border-opacity-25">
                  <h6 className="text-uppercase small fw-bold mb-2 opacity-75">Rekening Resmi Masjid:</h6>
                  <h4 className="fw-bold mb-1">{bankAccount.bank}</h4>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="display-6 fw-bold text-white ls-lg">{bankAccount.number}</span>
                    <button 
                      onClick={handleCopy}
                      className="btn btn-sm btn-light rounded-circle shadow-sm" 
                    >
                      <i className="ri-file-copy-line"></i>
                    </button>
                  </div>
                  <p className="mb-0 small fw-medium">a.n {bankAccount.name}</p>
                </div>
              </div>

              {/* SISI KANAN: QRIS (Visual) */}
              <div className="col-lg-5 bg-white bg-opacity-10 d-flex flex-column align-items-center justify-content-center p-5 text-center text-white border-start border-white border-opacity-25">
                <div className="bg-white p-3 rounded-4 shadow-lg mb-3">
                  <div className="d-flex align-items-center justify-content-center bg-light rounded" style={{ width: '180px', height: '180px' }}>
                    <i className="ri-qr-code-line text-dark display-1"></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-1">Scan QRIS</h5>
                <p className="small opacity-75 mb-0 text-uppercase ls-md">Infaq Kilat via QRIS</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}